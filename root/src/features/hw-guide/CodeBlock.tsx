// import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// // import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

// export default function CodeBlock(props: { language: string | null; value: any }) {
//     const { language, value } = props
//     return (
//         <SyntaxHighlighter language={language} style={dracula}>
//             {value}
//         </SyntaxHighlighter>
//     )
// }

const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
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
}

export default CodeBlock
