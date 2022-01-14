import { Box, SxProps } from '@mui/material'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    title?: string
    videoUrl: string
    sx?: SxProps
}

export default function SimpleVideoPlayer(props: Props) {
    const { sx, title, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Box className="SimpleVideoPlayer-root" sx={[...(Array.isArray(sx) ? sx : [sx ?? false])]}>
            <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
        </Box>
    )
}
