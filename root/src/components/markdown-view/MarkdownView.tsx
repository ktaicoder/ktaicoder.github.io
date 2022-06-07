/* eslint-disable react/no-unstable-nested-components */
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2rem;
    font-family: 'Nanum Gothic Coding', 'Noto Sans KR', monospace;
`
// const markdown = `Just a link: https://reactjs.com.`

type Props = {
    markdown?: string
}

export default function MarkdownView(props: Props) {
    const { markdown } = props
    return (
        <MarkdownStyle>
            <ReactMarkdown
                remarkPlugins={[gfm]}
                components={{
                    code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                }}
            >
                {markdown ?? ''}
            </ReactMarkdown>
        </MarkdownStyle>
    )
}
