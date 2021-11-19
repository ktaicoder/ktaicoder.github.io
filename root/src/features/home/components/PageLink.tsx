import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Button, Typography } from '@mui/material'
import { SxProps } from '@mui/system'

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
            sx={{
                display: 'flex',
                border: '1px solid #CED5DB',
                alignItems: 'center',
                borderRadius: 3,
                px: 3,
                py: 2,
                ...sx,
            }}
            className={className}
        >
            <Box component="img" sx={{}} src={imageSrc} />
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
