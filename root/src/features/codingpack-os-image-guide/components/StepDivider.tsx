import { Box } from '@mui/material'

export default function StepDivider(props: { color1: string; color2: string; height: number }) {
    const { color1, color2, height } = props
    return (
        <Box
            sx={{
                width: '100%',
                height,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                '&::before': {
                    position: 'absolute',
                    content: '""',
                    top: '50%',
                    left: 0,
                    right: 0,
                    marginTop: '-1px',
                    height: '2px',
                    background: `linear-gradient(${color1}, ${color2})`,
                },
                '&::after': {
                    position: 'absolute',
                    content: '""',
                    top: '50%',
                    left: '50%',
                    height: '16px',
                    width: '16px',
                    marginLeft: '8px',
                    borderRadius: '2px',
                    transform: 'rotate(135deg)',
                    transformOrigin: 'top left',
                    borderTop: `2px solid ${color1}`,
                    borderLeft: `2px solid ${color1}`,
                },
            }}
        />
    )
}
