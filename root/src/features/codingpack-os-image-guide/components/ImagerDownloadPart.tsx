import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import StepTitle from './StepTitle'

export default function ImagerDownloadPart() {
    const theme = useTheme()
    const xsOrDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ display: 'block', mt: 10 }}>
            <StepTitle
                step="2단계"
                title="이미저(Imager) 프로그램 다운로드"
                subtitle="이미저는 SD카드에 OS 이미지를 굽는 프로그램입니다"
            />
            <Box
                sx={{
                    mt: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: '1rem',
                        ml: 1,
                    }}
                >
                    다운로드 사이트
                </Typography>
            </Box>
            <Box
                sx={{
                    background: '#213241',
                    padding: xsOrDown ? theme.spacing(3, 2, 3, 3) : theme.spacing(3, 5),
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ flex: 1, mr: 2 }}>
                    <Box
                        component="a"
                        sx={{ color: '#fff' }}
                        rel="noreferrer"
                        href="https://www.raspberrypi.com/software/"
                        target="_blank"
                    >
                        https://www.raspberrypi.com/software/
                    </Box>
                    <Typography sx={{ color: '#fff', mt: 2 }}>
                        라즈베리 사이트에 방문하여 본인의 운영체제에 맞는 버전을 선택하여 다운로드 해주세요.
                    </Typography>
                </Box>
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/rasp_logo.png')}
                    sx={{ width: '70px', height: '70px', objectFit: 'contain' }}
                />
            </Box>
            <Box
                sx={{
                    background: '#f0f0f0',
                    px: 2,
                    py: 5,
                    mt: 6,
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{ width: '100%', maxWidth: 460 }}
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/imager_download.png')}
                />
            </Box>
        </Box>
    )
}
