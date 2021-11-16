import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

interface Props {
    sx?: SxProps
    noDivider?: boolean
    children?: React.ReactChild
}

const PortletFooter = (props: Props) => {
    const { noDivider, sx, children } = props
    return (
        <Box
            sx={{
                py: 1,
                px: 2,
                borderTop: noDivider ? 'none' : '1px solid #ddd',
                borderBottomLeftRadius: '2px',
                borderBottomRightRadius: '2px',
                ...sx,
            }}
        >
            {children}
        </Box>
    )
}

export default PortletFooter
