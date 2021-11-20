import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useMeasure, useSessionStorage } from 'react-use'
import { routerUrlOf } from 'src/lib/urls'

export type DocViewDialogProps = {
    docId: string
    open: boolean
    onClose: () => void
}

function getDocUrl(docId: string): string {
    return routerUrlOf(`/post/${docId}?view=content`)
}

export default function DocViewDialog(props: DocViewDialogProps) {
    const { docId, open, onClose } = props
    const [containerRef, { height: containerHeight }] = useMeasure()
    const [expand, setExpand] = useSessionStorage('doc-dialog-expand')

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={expand ? 'md' : 'sm'}
            fullWidth
            sx={{
                '& .MuiPaper-root': {
                    background: '#FAFAFA',
                },
                '& .MuiDialog-paperScrollPaper': {
                    minHeight: 'calc(100vh - 70px)',
                },
                '& .MuiDialogContent-root': {
                    p: 0,
                    m: 0,
                },
            }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', pt: 1, pb: 1, px: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small" onClick={() => setExpand((p) => !p)}>
                        <AspectRatioIcon />
                    </IconButton>
                    <Box
                        component="a"
                        target="_blank"
                        rel="noreferrer"
                        href="https://ktaicoder.github.io/"
                        sx={{ ml: 2, fontSize: '0.85rem', color: '#888', textDecoration: 'none' }}
                    >
                        @ktaicoder
                    </Box>
                </Box>
                <IconButton size="small" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers ref={containerRef}>
                <Box
                    component="iframe"
                    src={getDocUrl(docId)}
                    sx={{
                        p: 0,
                        width: '100%',
                        height: `calc( ${containerHeight}px - 10px)`,
                        border: 'none',
                    }}
                ></Box>
                {/* <iframe src={routerUrlOf(`/post/${docId}`)}></iframe> */}
            </DialogContent>
        </Dialog>
    )
}
