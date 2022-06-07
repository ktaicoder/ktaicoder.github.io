import { Box, SxProps } from '@mui/material'
import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

type Props = {
    sx?: SxProps
    noDivider?: boolean
} & HTMLAttributes<HTMLDivElement>

const PortletFooter = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { noDivider, sx, className, children, ...rest } = props
    return (
        <Box
            {...rest}
            className={clsx('PortletFooter-root', className)}
            ref={ref}
            sx={[
                {
                    py: 1,
                    px: 2,
                    borderTop: noDivider ? 'none' : '1px solid #ddd',
                    borderBottomLeftRadius: '2px',
                    borderBottomRightRadius: '2px',
                },
                ...(Array.isArray(sx) ? sx : [sx ?? false]),
            ]}
        >
            {children}
        </Box>
    )
})

PortletFooter.displayName = 'PortletFooter'
export default PortletFooter
