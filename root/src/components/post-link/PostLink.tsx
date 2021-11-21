import { Box, BoxProps } from '@mui/material'
import React from 'react'
import { CustomEvents } from 'src/lib/custom-events/CustomEvents'
import { routerPush, routerUrlOf } from 'src/lib/urls'

type Props = {
    children: React.ReactNode | React.ReactNode[]
    postId: string
    type: '_new' | '_page' | '_dialog'
} & BoxProps

export default function PostLink(props: Props) {
    const { children, sx, type = '_dialog', postId, ...restProps } = props
    const openLink = () => {
        if (type === '_dialog') {
            CustomEvents.post.openDialog.send({ postId })
        } else if (type === '_new') {
            window?.open(routerUrlOf(`/post-frame/${postId}`), '_blank')
        } else {
            routerPush(`/post-frame/${postId}`)
        }
    }
    return (
        <Box
            onClick={openLink}
            component="span"
            sx={{
                position: 'relative',
                color: 'blue',
                cursor: 'pointer',
                display: 'inline-block',
                px: 0.2,
                ':hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    borderRadius: '4px',
                },
                ...sx,
            }}
            {...restProps}
        >
            {children}
            <Box
                component="span"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: -2,
                    width: '4px',
                    height: '4px',
                    bgcolor: 'secondary.main',
                    borderRadius: '50%',
                    content: '""',
                }}
            />
        </Box>
    )
}
