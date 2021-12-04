import React, { useEffect, useState, useCallback } from 'react'
import VideoPlayerDialog, { VideoPlayerDialogProps } from 'src/dialogs/video-player/VideoPlayerDialog'
import { CustomEvents } from 'src/lib/custom-events/CustomEvents'

type DialogId = 'VideoPlayerDialog'

export default function OpenVideoDialogEventHandler() {
    const [videoPlayerDialogProps, setPostViewDialogProps] = useState<Omit<VideoPlayerDialogProps, 'open'>>()
    const [dialogId, setDialogId] = useState<DialogId>()

    //
    const _closeDialog = useCallback(() => {
        setDialogId(undefined)
        setPostViewDialogProps(undefined)
    }, [])

    const _openPostDialog = useCallback(
        (videoUrl: string) => {
            setDialogId('VideoPlayerDialog')
            setPostViewDialogProps({
                videoUrl,
                onClose: _closeDialog,
            })
        },
        [_closeDialog],
    )

    useEffect(() => {
        const s1 = CustomEvents.video.openDialog.observe().subscribe((payload) => {
            _openPostDialog(payload.videoUrl)
        })

        return () => {
            s1.unsubscribe()
        }
    }, [_openPostDialog])

    if (dialogId === 'VideoPlayerDialog' && videoPlayerDialogProps) {
        return <VideoPlayerDialog open={true} {...videoPlayerDialogProps} />
    } else {
        return null
    }
}
