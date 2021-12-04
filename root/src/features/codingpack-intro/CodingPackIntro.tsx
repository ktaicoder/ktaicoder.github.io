import { Box, Container, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import SimplePlayer from './components/SimplePlayer'

function randomNumericString() {
    return Math.random().toString().substring(2)
}

export default function CodingPackIntro() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [lightbox, setLightbox] = useState<{ name?: string }>({})
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clsname = `lightbox-${randomNumericString()}`
        if (containerRef.current) {
            containerRef.current?.classList?.add(clsname)
            setLightbox({ name: clsname })
        }
    }, [])

    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }}>
            <Container maxWidth="md" component="div" ref={containerRef} style={{ maxWidth: 760 }}>
                <SimplePlayer videoUrl="https://www.youtube.com/watch?v=WtujHpeIzX4" />
            </Container>
            {/* 이미지 뷰어를 띄운다 */}
            {lightbox.name && (
                <ImageViewerContainer
                    multiple={true}
                    cssSelector={`.${lightbox.name} img.lightbox`}
                    revision={lightbox}
                />
            )}
        </Box>
    )
}
