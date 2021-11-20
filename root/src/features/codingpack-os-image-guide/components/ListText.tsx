import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { Box, Typography } from '@mui/material'

export default function ListText(props: { text: React.ReactNode }) {
    const { text } = props
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <CheckCircleRoundedIcon style={{ fontSize: '0.95rem', marginTop: '5.5px', lineHeight: 1.5 }} />
            <Typography variant="body1" sx={{ ml: 1, fontSize: '0.95rem' }}>
                {text}
            </Typography>
        </Box>
    )
}
