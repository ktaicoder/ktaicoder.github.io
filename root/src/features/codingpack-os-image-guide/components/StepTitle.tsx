import { Box, Typography } from '@mui/material'

export default function StepTitle(props: { step: string; title: string; subtitle?: string }) {
    const { step, title, subtitle } = props
    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#228AA5',
                        whiteSpace: 'nowrap',
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
            {subtitle && (
                <Typography
                    variant="subtitle2"
                    sx={{
                        mt: 1,
                        textAlign: 'center',
                        fontWeight: 300,
                        fontSize: '1.0rem',
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    )
}
