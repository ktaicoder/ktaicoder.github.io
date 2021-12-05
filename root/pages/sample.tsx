import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import VideoPlayerDialog, { VideoPlayerDialogProps } from 'src/dialogs/video-player/VideoPlayerDialog'
import MainLayout from 'src/layout/main/MainLayout'
import { useRef } from 'react'

type SimplePlayerProps = {
    title?: string
    videoUrl: string
}

function SimplePlayer(props: SimplePlayerProps) {
    const { title, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)

    const _handleFullscreen = () => {
        if (!playerRef.current) return

        // eslint-disable-next-line react/no-find-dom-node
        // const elem = findDOMNode(playerRef.current)
        // if (screenfull.isEnabled && elem) {
        //     screenfull.request(elem as Element)
        // }
    }

    const _handleOnReady = () => {
        // setTimeout(() => setPlaying(true), 100)
    }

    return (
        <Container maxWidth="sm">
            <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
        </Container>
    )
}

const Index: NextPage = () => {
    const [dialogProps, setDialogProps] = useState<Omit<VideoPlayerDialogProps, 'open'>>()
    const _closeDialog = () => {
        setDialogProps(undefined)
    }

    return (
        <MainLayout title="하드웨어 가이드">
            <>
                <Button
                    onClick={() =>
                        setDialogProps({
                            onClose: _closeDialog,
                            title: 'HELLO',
                            videoUrl:
                                'https://www.youtube.com/watch?v=WtujHpeIzX4&ab_channel=KT-%EC%BC%80%EC%9D%B4%ED%8B%B0',
                        })
                    }
                >
                    TEST
                </Button>

                <Box>
                    <SimplePlayer
                        videoUrl={
                            'https://www.youtube.com/watch?v=WtujHpeIzX4&ab_channel=KT-%EC%BC%80%EC%9D%B4%ED%8B%B0'
                        }
                    />
                </Box>
                {dialogProps && <VideoPlayerDialog {...dialogProps} open={true} />}
            </>
        </MainLayout>
    )
}

export default Index
