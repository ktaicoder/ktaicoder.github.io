import { Box, Container, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import GuideTitle from 'src/components/guide-title/GuideTitle'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import CodingpackSetupStepLinks from 'src/components/codingpack-setup-step-links/CodingpackSetupStepLinks'
import EtcherDownloadPart from './components/EtcherDownloadPart'
import IntroStepPart from './components/IntroStepPart'
import OsImageDownloadPart from './components/OsImageDownloadPart'
import OsImageWritePart from './components/OsImageWritePart'
import OsImageWritePartSub1 from './components/OsImageWritePartSub1'
import OsImageWritePartSub2 from './components/OsImageWritePartSub2'
import OsImageWritePartSub3 from './components/OsImageWritePartSub3'
import OsImageWritePartSub4 from './components/OsImageWritePartSub4'
import RaspIntroPart from './components/RaspIntroPart'
import ShortDescPart from './components/ShortDescPart.tsx'

function randomNumericString() {
    return Math.random().toString().substring(2)
}

export default function CodingPackOsImageGuide() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
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
            <Container maxWidth="md" component="div" ref={containerRef} style={{ maxWidth: 760 }}>
                <GuideTitle title="코딩팩 OS 이미지 굽기" sx={{ mb: 4 }} />

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

                {/* 요약설명 */}
                <Box sx={{ display: 'block', mt: 8 }}>
                    <ShortDescPart />
                </Box>

                <Box style={{ borderTop: '2px dotted #ccc' }} mt={10} />
                <Box
                    sx={{
                        mt: 1,
                        color: '#666',
                        fontSize: '0.85rem',
                        lineHeight: 2,
                        fontWeight: 400,
                        textAlign: 'center',
                    }}
                >
                    아래는 좀 더 자세한 설명입니다.
                </Box>
                <Box sx={{ mt: 10 }}>
                    <CodingpackSetupStepLinks currentStep={1} next={false} />
                </Box>
                {/* 1단계 OS 이미지 다운로드 */}
                <Box sx={{ mt: 10 }}>
                    <OsImageDownloadPart />
                </Box>

                {/* 2단계 에처(OS 제작 프로그램) 다운로드 */}
                <Box sx={{ mt: 10 }}>
                    <EtcherDownloadPart />
                </Box>

                {/* 3단계 SD 카드에 OS 이미지 굽기 */}
                <Box sx={{ mt: 10 }}>
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
                    <CodingpackSetupStepLinks currentStep={1} next />
                </Box>

                {/* <Box sx={{ mt: 10 }}>
                    <AfterStepPart1 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart2 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart3 />
                </Box>
                <Box sx={{ mt: 10 }}>
                    <AfterStepPart4 />
                </Box> */}
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
