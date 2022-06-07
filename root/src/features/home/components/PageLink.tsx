import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Button, SxProps, Typography } from '@mui/material'
import { arraySx } from 'src/lib/sx-props'

type Props = {
    imageSrc: string
    href: string
    title: string
    subtitle: string
    sx?: SxProps
    className: string
}

export default function PageLink(props: Props) {
    const { imageSrc, href, title, subtitle, sx, className } = props

    return (
        <Box
            sx={[
                {
                    display: 'flex',
                    border: '1px solid #CED5DB',
                    alignItems: 'center',
                    borderRadius: 3,
                    background: '#fff',
                    px: 3,
                    py: 2,
                    '&:hover': {
                        backgroundColor: '#f9f9f9',
                        '& .MuiTypography-subtitle1': {
                            color: '#000',
                        },
                        '& .MuiTypography-body2': {
                            color: '#000',
                        },
                        '& > img': {
                            transition: '0.2s',
                            transform: 'scale(1.15)',
                        },
                    },
                },
                ...arraySx(sx),
            ]}
            className={className}
        >
            <Box
                component="img"
                sx={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain',
                }}
                src={imageSrc}
            />
            <Box sx={{ flex: 1, ml: 4 }}>
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    {subtitle}
                </Typography>
                <Button
                    sx={{ mt: 1, ml: -1 }}
                    endIcon={<ChevronRightIcon />}
                    component="a"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                >
                    바로가기
                </Button>
            </Box>
        </Box>
    )
}
