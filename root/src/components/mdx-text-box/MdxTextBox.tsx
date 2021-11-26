import { Box, BoxProps } from '@mui/material'
import { useRef } from 'react'

type Props = BoxProps

export default function MdxTextBox(props: Props) {
    const { sx, children, ...rest } = props
    const boxRef = useRef()

    return (
        <Box
            ref={boxRef}
            sx={{
                display: 'block',
                background: '#eee',
                px: 3,
                py: 2,
                my: 2,
                borderRadius: 2,
                '& > ul': {
                    pl: 2,
                    pr: 0,
                },
                '& > em': {
                    position: 'relative',
                    color: 'secondary.main',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    pl: '2px',
                    pr: '2px',
                    mr: '2px',
                    lineHeight: '1.05em',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        zIndex: 100,
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        background: 'rgba(0,0,0, 0.1)',
                        borderRadius: '4px',
                    },
                },

                ...sx,
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}
