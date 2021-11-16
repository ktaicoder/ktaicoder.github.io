import ChevronRight from '@mui/icons-material/ChevronRight'
import { Box, ButtonBase, Container, Divider, Icon, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import EtcherDownloadPart from './components/EtcherDownloadPart'
import IntroStepPart from './components/IntroStepPart'
import ListText from './components/ListText'
import OsImageDownloadPart from './components/OsImageDownloadPart'
import OsImageWritePart from './components/OsImageWritePart'
import RaspDownloadButton from './components/RaspDownloadButton'
import RaspIntroPart from './components/RaspIntroPart'
import StepCircle from './components/StepCircle'
import StepDivider from './components/StepDivider'
import StepTitle from './components/StepTitle'

function downloadLink(href: string) {
    if ('download' in HTMLAnchorElement.prototype) {
        const downloadLink = document.createElement('a')
        document.body.appendChild(downloadLink)
        downloadLink.href = href
        downloadLink.type = 'application/octet-stream'
        downloadLink.click()
        document.body.removeChild(downloadLink)
    } else {
        // iOS Safari, open a new page and set href to data-uri
        let popup: Window | null = window.open('', '_blank')
        if (popup) {
            popup.location.href = href
        } else {
            console.warn('window.open() fail')
        }
    }
}

export default function CodingPackOsImageGuide() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }}>
            <Container maxWidth="md">
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    라즈베리 파이(Raspberry Pi) OS 만들기
                </Typography>

                {/* 라즈베리 소개 부분 */}
                <RaspIntroPart />

                {/* 세 단계 소개 부분  */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: smDown ? 2 : 10,
                        width: '100%',
                    }}
                >
                    <IntroStepPart />
                </Box>

                {/* 1단계 OS 이미지 다운로드 */}
                <Box sx={{ display: 'block', mt: 18 }}>
                    <OsImageDownloadPart />
                </Box>

                {/* 2단계 에처(OS 제작 프로그램) 다운로드 */}
                <Box sx={{ display: 'block', mt: 10 }}>
                    <EtcherDownloadPart />
                </Box>

                {/* 3단계 SD 카드에 OS 이미지 굽기 */}
                <Box sx={{ display: 'block', mt: 10 }}>
                    <OsImageWritePart />
                </Box>
            </Container>
        </Box>
    )
}
