import { Container } from '@mui/material'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

type Props = {
    title?: string
    videoUrl: string
}

export default function SimplePlayer(props: Props) {
    const { title, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Container maxWidth="sm">
            <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
        </Container>
    )
}
