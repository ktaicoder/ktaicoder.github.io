import { Download } from '@mui/icons-material'
import { Box, ButtonBase, ButtonProps, Icon, Typography } from '@mui/material'
import { MouseEventHandler } from 'react'

export default function RaspDownloadButton(props: { raspVersion: string; onClick?: MouseEventHandler }) {
    const { raspVersion, onClick } = props
    return (
        <ButtonBase
            component="div"
            onClick={onClick}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                background: '#5DA7B4',
                padding: (theme) => theme.spacing(1, 2, 1, 4),
                borderRadius: '20px',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    display: 'flex',
                    color: '#fff',
                    alignItems: 'center',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    flex: 1,
                }}
            >
                라즈베리 파이
                <Box
                    sx={{
                        mx: 1,
                        color: '#FFC85F',
                        fontWeight: 700,
                        fontSize: '1rem',
                    }}
                >
                    {raspVersion}
                </Box>
                OS 이미지
            </Typography>
            <Icon sx={{ color: '#FFF', ml: 3 }} fontSize="small">
                <Download />
            </Icon>
        </ButtonBase>
    )
}
