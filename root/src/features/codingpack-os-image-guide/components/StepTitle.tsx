import { Box, Typography } from '@mui/material'

export default function StepTitle(props: { step: string; title: string }) {
    const { step, title } = props
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
                variant="subtitle1"
                sx={{
                    color: '#228AA5',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                }}
            >
                {step}
            </Typography>
            <Typography variant="subtitle1" sx={{ ml: 2, fontWeight: 700, fontSize: '1.4rem' }}>
                {title}
            </Typography>
        </Box>
    )
}
