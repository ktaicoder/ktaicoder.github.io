import { Box } from '@mui/material'

interface Props {
    noPadding?: boolean
    children?: React.ReactNode
}

const PortletContent = (props: Props) => {
    const { noPadding, children } = props
    return (
        <Box
            sx={{
                ...(noPadding ? { p: 0 } : { px: 3, py: 2 }),
                flexGrow: 1,
            }}
        >
            {children}
        </Box>
    )
}

export default PortletContent
