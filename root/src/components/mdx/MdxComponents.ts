import { Box, Button } from '@mui/material'
import dynamic from 'next/dynamic'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import MdxImageView from 'src/components/mdx-image-view/MdxImageView'
import MdxTextBox from 'src/components/mdx-text-box/MdxTextBox'
import PostLink from 'src/components/post-link/PostLink'
import { Typography } from '@mui/material'
import Icon from '@mui/material/Icon'

const MdxComponents = {
    Tips: dynamic(() => import('src/components/mdx/Tips')),
    SyntaxHighlighter,
    Button,
    Box,
    MdxImageView,
    MdxTextBox,
    PostLink,
    Typography,

    // 아이콘 목록 https://fonts.google.com/icons
    Icon,
}

export default MdxComponents
