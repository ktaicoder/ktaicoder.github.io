import { Box, Container } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import SimplePlayer from './components/SimplePlayer'

function randomNumericString() {
    return Math.random().toString().substring(2)
}

export default function CodingPackIntro() {
    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }} className="CodingPackIntro-root">
            <Container maxWidth="md" component="div" style={{ maxWidth: 760 }}>
                <SimplePlayer videoUrl="https://www.youtube.com/watch?v=WtujHpeIzX4" />
            </Container>
        </Box>
    )
}
