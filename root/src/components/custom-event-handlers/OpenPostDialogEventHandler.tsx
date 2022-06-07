import React, { useEffect, useState, useCallback } from 'react'
import PostViewDialog, { PostViewDialogProps } from 'src/dialogs/post-view/PostViewDialog'
import { CustomEvents } from 'src/lib/custom-events/CustomEvents'

type DialogId = 'PostViewDialog'

export default function OpenPostDialogEventHandler() {
    const [postViewDialogProps, setPostViewDialogProps] = useState<Omit<PostViewDialogProps, 'open'>>()
    const [dialogId, setDialogId] = useState<DialogId>()

    //
    const _closeDialog = useCallback(() => {
        setDialogId(undefined)
        setPostViewDialogProps(undefined)
    }, [])

    const _openPostDialog = useCallback(
        (postId: string) => {
            setDialogId('PostViewDialog')
            setPostViewDialogProps({
                postId,
                onClose: _closeDialog,
            })
        },
        [_closeDialog],
    )

    useEffect(() => {
        const s1 = CustomEvents.post.openDialog.observe().subscribe((payload) => {
            _openPostDialog(payload.postId)
        })

        return () => {
            s1.unsubscribe()
        }
    }, [_openPostDialog])

    if (dialogId === 'PostViewDialog' && postViewDialogProps) {
        return <PostViewDialog open {...postViewDialogProps} />
    } 
        return null
    
}
