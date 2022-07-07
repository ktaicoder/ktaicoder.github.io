import { Box, Container } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import CodingpackSetupStepLinks from 'src/components/codingpack-setup-step-links/CodingpackSetupStepLinks'
import GuideTitle from 'src/components/guide-title/GuideTitle'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import EtcherDownloadPart from './components/EtcherDownloadPart'
import IntroStepPart from './components/IntroStepPart'
import OsImageDownloadPart from './components/OsImageDownloadPart'
import OsImageWritePart from './components/OsImageWritePart'
import OsImageWritePartSub1 from './components/OsImageWritePartSub1'
import OsImageWritePartSub2 from './components/OsImageWritePartSub2'
import OsImageWritePartSub3 from './components/OsImageWritePartSub3'
import OsImageWritePartSub4 from './components/OsImageWritePartSub4'
import RaspIntroPart from './components/RaspIntroPart'
import ShortDescPart from './components/ShortDescPart'

export default function CodingPackOsImageGuide() {
    const [revision, setRevision] = useState(0)
    const rootRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (rootRef.current) {
            // 이미지 뷰어를 갱신하기 위해 한번더 리로드
            setRevision(Date.now())
        }
    }, [])

    return (
        <Box sx={{ pt: 2, mt: 5, pb: 15 }} className="CodingPackOsImageGuide-root" ref={rootRef}>
            <Container
                maxWidth="md"
                component="div"
                style={{ maxWidth: 760 }}
                className="CodingPackOsImageGuide-container"
            >
                <GuideTitle title="코디니팩 OS 이미지 굽기" sx={{ mb: 4 }} />

                {/* 라즈베리 소개 부분 */}
                <RaspIntroPart />

                {/* 세 단계 소개 부분  */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: {
                            xs: 2,
                            md: 10,
                        },
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
            {rootRef.current && (
                <ImageViewerContainer
                    multiple
                    parentElement={rootRef.current}
                    cssSelector=".CodingPackOsImageGuide-container img.lightbox"
                    revision={revision}
                />
            )}
        </Box>
    )
}
