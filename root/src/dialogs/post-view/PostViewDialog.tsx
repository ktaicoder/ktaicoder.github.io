import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React from 'react'
import { useMeasure, useSessionStorage } from 'react-use'
import { routerUrlOf } from 'src/lib/urls'

export type PostViewDialogProps = {
    postId: string
    open: boolean
    onClose: () => void
}

function getPostUrl(postId: string): string {
    return routerUrlOf(`/post/${postId}`)
}

function getPostFrameUrl(postId: string): string {
    return routerUrlOf(`/post-frame/${postId}`)
}

export default function PostViewDialog(props: PostViewDialogProps) {
    const { postId, open, onClose } = props
    const [containerRef, { height: containerHeight }] = useMeasure()
    const [expand, setExpand] = useSessionStorage('doc-dialog-expand', true)

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
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small" onClick={() => setExpand((p) => !p)}>
                        <AspectRatioIcon />
                    </IconButton>

                    <Box
                        component="a"
                        target="_blank"
                        rel="noreferrer"
                        href={getPostFrameUrl(postId)}
                        sx={{
                            ml: 2,
                            fontSize: '0.85rem',
                            color: '#888',
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            ':hover': {
                                color: '#000',
                            },
                        }}
                    >
                        <span>@ktaicoder</span>
                        <ArrowDropDownIcon sx={{ ml: 1, fontSize: '1rem' }} />
                    </Box>
                </Box>
                <IconButton size="small" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers ref={containerRef}>
                <Box
                    component="iframe"
                    src={getPostUrl(postId)}
                    sx={{
                        p: 0,
                        width: '100%',
                        height: `calc( ${containerHeight.toFixed(0)}px - 10px)`,
                        border: 'none',
                    }}
                ></Box>
                {/* <iframe src={routerUrlOf(`/post/${postId}`)}></iframe> */}
            </DialogContent>
        </Dialog>
    )
}
