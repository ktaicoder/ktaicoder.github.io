import { Box, Typography } from '@mui/material'

function StepCircleImage(props: { color: string; imageSrc: string; size: number }) {
    const { color, imageSrc, size } = props
    return (
        <Box
            sx={{
                background: color,
                width: size,
                height: size,
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&::before': {
                    position: 'absolute',
                    content: '""',
                    inset: 2,
                    borderRadius: '50%',
                    border: '10px solid #fff',
                },
            }}
        >
            <Box
                component="img"
                src={imageSrc}
                sx={{
                    objectFit: 'contain',
                    width: size * 0.35,
                    height: size * 0.35,
                }}
            />
        </Box>
    )
}

function StepCircleText(props: { center: boolean; color: string; title: string; subtitle: string }) {
    const { title, subtitle, color, center } = props
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'flex-start' }}>
            <Typography
                variant="subtitle1"
                sx={{
                    color,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                }}
            >
                {title}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '0.8rem' }}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default function StepCircle(props: {
    title: string
    subtitle: string
    color: string
    imageSrc: string
    size: number
    horizontal: boolean
}) {
    const { title, subtitle, color, horizontal, imageSrc, size } = props
    return (
        <Box
            sx={{
                position: 'relative',
                ...(horizontal && { mt: 4, display: 'flex', alignItems: 'center' }),
                ...(!horizontal && { paddingBottom: '80px', border: '0px solid red' }),
            }}
        >
            <StepCircleImage color={color} imageSrc={imageSrc} size={size * (horizontal ? 0.8 : 1)} />
            {horizontal ? (
                <Box
                    sx={{
                        flex: 1,
                        ml: 4,
                    }}
                >
                    <StepCircleText title={title} subtitle={subtitle} color={color} center={false} />
                </Box>
            ) : (
                <Box
                    sx={{
                        position: 'absolute',
                        width: size * 2,
                        left: -size / 2,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <StepCircleText title={title} subtitle={subtitle} color={color} center />
                </Box>
            )}
        </Box>
    )
}
