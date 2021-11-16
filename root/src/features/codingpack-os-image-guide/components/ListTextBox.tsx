import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

export default function ListTextBox(props: { sx?: SxProps; children: React.ReactChild | React.ReactChild[] }) {
    const { sx } = props
    return (
        <Box
            sx={{
                background: '#F6F6F6', //
                p: 3,
                mt: 6,
                '& > div + div': { mt: 1 },
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}
