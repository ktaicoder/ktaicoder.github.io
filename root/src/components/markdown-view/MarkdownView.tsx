import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2rem;
    font-family: 'Nanum Gothic Coding', 'Noto Sans KR', monospace;
`
//const markdown = `Just a link: https://reactjs.com.`

type Props = {
    markdown?: string
}

export default function MarkdownView(props: Props) {
    const { markdown } = props
    return (
        <MarkdownStyle>
            <ReactMarkdown
                children={markdown ?? ''}
                remarkPlugins={[gfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    },
                }}
            />
        </MarkdownStyle>
    )
}
