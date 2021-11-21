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
                background: '#eee',
                px: 3,
                py: 2,
                borderRadius: 2,
                '& > ul': {
                    pl: 2,
                    pr: 0,
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Box>
    )
}
