import { Box, Button, Typography } from '@mui/material'
import Icon from '@mui/material/Icon'
import dynamic from 'next/dynamic'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import CodingpackSetupStepLinks from 'src/components/codingpack-setup-step-links/CodingpackSetupStepLinks'
import MdxImageView from 'src/components/mdx-image-view/MdxImageView'
import MdxLink from 'src/components/mdx-link/MdxLink'
import MdxTextBox from 'src/components/mdx-text-box/MdxTextBox'
import MdxVideoPlayer from 'src/components/mdx-video-player/MdxVideoPlayer'
import PostLink from 'src/components/post-link/PostLink'

const MdxComponents = {
    Tips: dynamic(() => import('src/components/mdx/Tips')),
    SyntaxHighlighter,
    Button,
    Box,
    MdxImageView,
    MdxTextBox,
    PostLink,
    Typography,
    CodingpackSetupStepLinks,
    MdxLink,
    MdxVideoPlayer,
    // 아이콘 목록 https://fonts.google.com/icons
    Icon,
}

export default MdxComponents
