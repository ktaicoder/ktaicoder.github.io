import { Box, BoxProps } from '@mui/material'
import React from 'react'
import { CustomEvents } from 'src/lib/custom-events/CustomEvents'
import { routerPush, routerUrlOf } from 'src/lib/urls'

type Props = {
    children: React.ReactNode | React.ReactNode[]
    docId: string
    type: '_new' | '_page' | '_dialog'
} & BoxProps

export default function DocLink(props: Props) {
    const { children, sx, type = '_dialog', docId, ...restProps } = props
    const openLink = () => {
        if (type === '_dialog') {
            CustomEvents.doc.openDialog.send({ docId })
        } else if (type === '_new') {
            window?.open(routerUrlOf(`/post/${docId}?view=content`), '_blank')
        } else {
            routerPush(`/post/${docId}?view=content`)
        }
    }
    return (
        <Box
            onClick={openLink}
            sx={{
                position: 'relative',
                color: 'blue',
                cursor: 'pointer',
                display: 'inline-block',
                px: 0.2,
                ...sx,
            }}
            {...restProps}
        >
            {children}
            <Box
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
            ></Box>
        </Box>
    )
}
