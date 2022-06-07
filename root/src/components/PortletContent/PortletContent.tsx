import { Box, SxProps } from '@mui/material'
import clsx from 'clsx'
import React from 'react'

type Props = {
    noPadding?: boolean
    sx?: SxProps
    className?: string
    children?: React.ReactNode | React.ReactNode[]
}

const PortletContent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { noPadding = false, className, sx, children } = props
    return (
        <Box
            className={clsx('PortletContent-root', className)}
            ref={ref}
            sx={[
                {
                    flexGrow: 1,
                    px: noPadding ? 0 : 3,
                    py: noPadding ? 0 : 2,
                },
                ...(Array.isArray(sx) ? sx : [sx ?? false]),
            ]}
        >
            {children}
        </Box>
    )
})

PortletContent.displayName = 'PortletContent'
export default PortletContent
