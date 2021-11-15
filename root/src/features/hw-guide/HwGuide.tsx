import { Box, Container } from '@mui/material'
import MarkdownUrlView from 'src/components/markdown-url-view/MarkdownUrlView'

export default function HwGuide() {
    return (
        <Box sx={{ p: 2 }}>
            <Container maxWidth="md">
                <MarkdownUrlView url="https://raw.githubusercontent.com/ktaicoder/hw-pc/main/README.md" />
            </Container>
        </Box>
    )
}
