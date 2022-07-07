import dynamic from 'next/dynamic'

const MdxComponents = {
    SyntaxHighlighter: dynamic(() => import('react-syntax-highlighter').then((m) => m.Prism)),
    Button: dynamic(() => import('@mui/material/Button')),
    Box: dynamic(() => import('@mui/material/Box')),
    Typography: dynamic(() => import('@mui/material/Typography')),
    MdxImageView: dynamic(() => import('src/components/mdx-image-view/MdxImageView')),
    MdxTextBox: dynamic(() => import('src/components/mdx-text-box/MdxTextBox')),
    PostLink: dynamic(() => import('src/components/post-link/PostLink')),
    CodingpackSetupStepLinks: dynamic(
        () => import('src/components/codingpack-setup-step-links/CodingpackSetupStepLinks'),
    ),
    MdxLink: dynamic(() => import('src/components/mdx-link/MdxLink')),
    MdxVideoPlayer: dynamic(() => import('src/components/mdx-video-player/MdxVideoPlayer')),
    PyExampleLinkBox: dynamic(() => import('src/components/PyExampleLinkBox')),

    // 아이콘 목록 https://fonts.google.com/icons
    Icon: dynamic(() => import('@mui/material/Icon')),
}

export default MdxComponents
