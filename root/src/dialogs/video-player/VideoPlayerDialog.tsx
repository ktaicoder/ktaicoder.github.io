import CloseIcon from '@mui/icons-material/Close'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
// import screenfull from 'screenfull'
import ClipboardButton from './ClipboardButton'

export type VideoPlayerDialogProps = {
    open: boolean
    title?: string
    videoUrl: string
    onClose: () => void
}

export default function VideoPlayerDialog(props: VideoPlayerDialogProps) {
    const { open, onClose, title, videoUrl } = props
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)

    const _handleDialogClose = () => {
        onClose?.()
    }

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
        <Dialog
            aria-labelledby="video-player-view-dialog"
            open={open}
            maxWidth="md"
            fullWidth
            onClose={_handleDialogClose}
            sx={{
                // Mui의 기본 스타일 paddingTop 제거
                '& .MuiDialogContent-root:first-child': {
                    paddingTop: 0,
                },
                '& .MuiDialogContent-root': {
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: '2px', // 2px 여백이 없으면 스크롤바 생김
                },
            }}
        >
            {title && (
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} minHeight={64}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            '& h2': {
                                fontSize: '1.1rem',
                                fontWeight: 600,
                            },
                        }}
                    >
                        <Typography variant="h5">{title}</Typography>
                        <IconButton onClick={_handleDialogClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Stack>
            )}

            <DialogContent dividers={Boolean(title)}>
                <ReactPlayer ref={playerRef} width="100%" url={videoUrl} controls onReady={_handleOnReady} />
            </DialogContent>
            <DialogActions>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        '& .MuiButton-root + .MuiButton-root': {
                            ml: 1,
                        },
                    }}
                >
                    {/* <Box>
                        <Button onClick={_handleFullscreen} color="primary">
                            전체 화면
                        </Button>
                        <ClipboardButton buttonText="영상 주소 복사" clipboardTextFunc={() => videoUrl} />
                    </Box> */}
                    <Button onClick={_handleDialogClose} color="primary">
                        닫기
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
