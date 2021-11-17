import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

export default function ListTextBox(props: { sx?: SxProps; children?: React.ReactChild | React.ReactChild[] }) {
    const { sx, children } = props
    return (
        <Box
            sx={{
                // background: '#F6F6F6', //
                ml: 1,
                mt: 6,
                '& > div + div': {
                    mt: 1,
                },
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}