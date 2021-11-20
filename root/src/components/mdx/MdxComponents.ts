import { Box, Button } from '@mui/material'
import dynamic from 'next/dynamic'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Directions from 'src/components/mdx/Directions'
import Ingredients from 'src/components/mdx/Ingredients'
import MdxImageView from 'src/components/mdx-image-view/MdxImageView'
import MdxTextBox from 'src/components/mdx-text-box/MdxTextBox'

const MdxComponents = {
    Ingredients,
    Directions,
    Tips: dynamic(() => import('src/components/mdx/Tips')),
    SyntaxHighlighter,
    Button,
    Box,
    MdxImageView,
    MdxTextBox,
}

export default MdxComponents
