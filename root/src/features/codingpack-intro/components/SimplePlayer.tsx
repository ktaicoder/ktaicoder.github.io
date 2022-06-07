import { Container } from '@mui/material'
import { useRef } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    videoUrl: string
}

export default function SimplePlayer(props: Props) {
    const { videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Container maxWidth="sm">
            <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
        </Container>
    )
}
