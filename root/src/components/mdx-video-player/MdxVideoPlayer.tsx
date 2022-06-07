import { Box, Container, SxProps } from '@mui/material'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    title?: string
    caption?: string
    videoUrl: string
    sx?: SxProps
}

export default function MdxVideoPlayer(props: Props) {
    const { sx, title, caption, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Box
            sx={{
                py: 3,
                px: 2,
                background: '#f0f0f0',
                borderRadius: '8px',
                border: '1px solid #eee',
                my: 1,
                width: '100%',
                ...sx,
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    width: '100%',
                }}
            >
                {title && (
                    <Box
                        sx={{
                            mb: 1,
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            color: '#191919',
                            fontWeight: 500,
                            lineHeight: '1.4rem',
                        }}
                    >
                        {title}
                    </Box>
                )}

                <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
                {caption && (
                    <Box
                        sx={{
                            mt: 1,
                            color: '#666',
                            textAlign: 'center',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            lineHeight: '1.2rem',
                        }}
                    >
                        {caption}
                    </Box>
                )}
            </Container>
        </Box>
    )
}
