import ChevronRight from '@mui/icons-material/ChevronRight'
import { Box, ButtonBase, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import StepTitle from './StepTitle'

export default function EtcherDownloadPart() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ display: 'block', mt: 10 }}>
            <StepTitle
                step="2단계"
                title="에처(Etcher) 프로그램 다운로드"
                subtitle="에처는 SD카드에 OS 이미지를 굽는 프로그램입니다"
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
                    에처(Etcher) 사이트
                </Typography>
                <ButtonBase
                    component="div"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        py: 0.5,
                        color: (theme) => theme.palette.primary.main,
                    }}
                >
                    바로가기
                    <ChevronRight />
                </ButtonBase>
            </Box>
            <Box
                sx={{
                    background: '#213241',
                    padding: smDown ? theme.spacing(3, 2, 3, 3) : theme.spacing(3, 5),
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
                        href="https://www.balena.io/etcher/"
                        target="_blank"
                    >
                        https://www.balena.io/etcher/
                    </Box>
                    <Typography sx={{ color: '#fff', mt: 2 }}>
                        에처 사이트에 방문하여 운영체제에 맞는 버전을 선택하여 다운로드 해주세요.
                    </Typography>
                </Box>
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/ic_etcher_logo.png')}
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
                    src={routerUrlOf('/images/codingpack/etcher_install1.png')}
                />
            </Box>
        </Box>
    )
}
