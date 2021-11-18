import { Box, BoxProps } from '@mui/material'

type Props = {
    title: string
} & BoxProps

export default function GuideTitle(props: Props) {
    const { title, sx, ...rest } = props

    return (
        <Box
            sx={{
                textAlign: 'center',
                fontSize: '1.7rem',
                lineHeight: '2rem',
                fontWeight: 600,
                color: '#111827',
                ...sx,
            }}
            {...rest}
        >
            {title}
        </Box>
    )
}
