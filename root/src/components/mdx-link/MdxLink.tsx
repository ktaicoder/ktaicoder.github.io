import { Box, BoxProps } from '@mui/material'
import React from 'react'
import { useLocalStorage } from 'react-use'

type Props = {
    children: React.ReactNode | React.ReactNode[]
    href: string
    target: '_self' | '_blank' | '_parent' | '_top'
} & BoxProps

export default function MdxLink(props: Props) {
    const { children, href, target, sx, ...restProps } = props
    const [access] = useLocalStorage('_access', '')

    return (
        <Box
            component="a"
            href={href}
            target={access === 'pc' ? '_self' : target}
            sx={{
                position: 'relative',
                color: '#0054cb',
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
            {children ?? href}
        </Box>
    )
}
