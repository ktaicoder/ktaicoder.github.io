import { useMemo, useState, useEffect, useRef } from 'react'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import AfterStepPart1 from './components/AfterStepPart1'
import AfterStepPart2 from './components/AfterStepPart2'
import AfterStepPart3 from './components/AfterStepPart3'
import EtcherDownloadPart from './components/EtcherDownloadPart'
import IntroStepPart from './components/IntroStepPart'
import OsImageDownloadPart from './components/OsImageDownloadPart'
import OsImageWritePart from './components/OsImageWritePart'
import OsImageWritePartSub1 from './components/OsImageWritePartSub1'
import OsImageWritePartSub2 from './components/OsImageWritePartSub2'
import OsImageWritePartSub3 from './components/OsImageWritePartSub3'
import OsImageWritePartSub4 from './components/OsImageWritePartSub4'
import RaspIntroPart from './components/RaspIntroPart'

function randomNumericString() {
    return Math.random().toString().substring(2)
}

export default function CodingPackOsImageGuide() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))
    const [lightbox, setLightbox] = useState<{ name?: string }>({})
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clsname = `lightbox-${randomNumericString()}`
        if (containerRef.current) {
            containerRef.current?.classList?.add(clsname)
            setLightbox({ name: clsname })
        }
    }, [])

    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }}>
            <Container maxWidth="md" component="div" ref={containerRef}>
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

                {/* 1. Flash from file - 이미지 파일 찾기 */}
                <Box sx={{ mt: 10 }}>
                    <OsImageWritePartSub1 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <OsImageWritePartSub2 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <OsImageWritePartSub3 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <OsImageWritePartSub4 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart1 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart2 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart3 />
                </Box>
            </Container>
            {/* 이미지 뷰어를 띄운다 */}
            {lightbox.name && (
                <ImageViewerContainer
                    multiple={true}
                    cssSelector={`.${lightbox.name} img.lightbox`}
                    revision={lightbox}
                />
            )}
        </Box>
    )
}
