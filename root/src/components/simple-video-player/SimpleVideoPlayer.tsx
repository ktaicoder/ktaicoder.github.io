import { Box, SxProps } from '@mui/material'
import { useRef } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    videoUrl: string
    sx?: SxProps
}

export default function SimpleVideoPlayer(props: Props) {
    const { sx, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Box className="SimpleVideoPlayer-root" sx={sx}>
            <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
        </Box>
    )
}
