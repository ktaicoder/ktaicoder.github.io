import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMeasure } from 'react-use'
import { randomCssClassName } from 'src/lib/randomCssClassName'
import { routerUrlOf } from 'src/lib/urls'
import PageLink from './components/PageLink'
import { useMemo } from 'react'

export default function SiteListPart() {
    const theme = useTheme()
    const pageLinkClassName = useMemo(() => randomCssClassName('pagelink-'), [])
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [containerRef, { width: containerWidth }] = useMeasure()

    const isNarrow = !isNaN(containerWidth) && containerWidth > 0 && containerWidth < 520

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                display: 'flex',
                py: 8,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h4" sx={{ fontSize: '1.4rem', color: 'primary.main', fontWeight: 600 }}>
                AI 코딩블록 정보 및 자료
            </Typography>

            <Box
                mt={8}
                sx={{
                    '& > div + div': {
                        mt: 3,
                    },
                }}
            >
                <Typography variant="h6" sx={{ color: '#0A1929', fontWeight: 500, mt: 4, mb: 2 }}>
                    AI 코딩블록 공식 사이트
                </Typography>
                <PageLink
                    className={pageLinkClassName}
                    title="AI 코딩블록 공식 사이트"
                    subtitle="블록 코딩 공식 사이트입니다. 블록 코딩과 관련된 다양한 정보들을 포함하고 있습니다."
                    imageSrc={routerUrlOf('/images/home/codiny1.png')}
                    href="https://aicodingblock.kt.co.kr"
                />
                <PageLink
                    className={pageLinkClassName}
                    title="AI 코딩블록 개발자 가이드"
                    subtitle="AI 코딩블록의 개발자 가이드를 제공하는 사이트입니다. "
                    imageSrc={routerUrlOf('/images/home/labtop.png')}
                    href="https://ktaicoder.github.io"
                />

                <Typography variant="h6" sx={{ color: '#222', fontWeight: 400, mt: 8, mb: 2 }}>
                    PC 프로그램
                </Typography>
                <PageLink
                    className={pageLinkClassName}
                    title="PC 프로그램 깃허브"
                    subtitle="PC 프로그램 소스코드가 GITHUB에 공개되어 있습니다."
                    imageSrc={routerUrlOf('/images/home/github.png')}
                    href={routerUrlOf('/')}
                />
                <PageLink
                    className={pageLinkClassName}
                    title="PC 프로그램 설치파일"
                    subtitle="링크를 클릭하여 PC용 프로그램을 설치해보세요."
                    imageSrc={routerUrlOf('/images/home/github.png')}
                    href="https://github.com/ktaicoder/hw-pc/releases"
                />

                <Typography variant="h5" sx={{ color: '#222', fontWeight: 400, mt: 8, mb: 2 }}>
                    하드웨어 라이브러리
                </Typography>

                <PageLink
                    className={pageLinkClassName}
                    title="하드웨어 인터페이스 라이브러리"
                    subtitle="블록코딩과 통신하기 위한 하드웨어들의 인터페이스 라이브러리입니다."
                    imageSrc={routerUrlOf('/images/home/nodejs1.png')}
                    href="https://github.com/ktaicoder/hw-proto"
                />
                <PageLink
                    className={pageLinkClassName}
                    title="하드웨어 인터페이스 라이브러리 NPM 저장소"
                    subtitle="하드웨어 인터페이스 라이브러리가 NPM에 등록되어 있습니다."
                    imageSrc={routerUrlOf('/images/home/nodejs2.png')}
                    href="https://www.npmjs.com/package/@ktaicoder/hw-proto"
                />

                <PageLink
                    className={pageLinkClassName}
                    title="하드웨어 제어 라이브러리"
                    subtitle="실제 하드웨어를 제어하는 라이브러리입니다. 계속해서 하드웨어를 추가중입니다."
                    imageSrc={routerUrlOf('/images/home/nodejs3.png')}
                    href="https://github.com/ktaicoder/hw-control"
                />
                <PageLink
                    className={pageLinkClassName}
                    title="하드웨어 제어 라이브러리 NPM 저장소"
                    subtitle="하드웨어 제어 라이브러리가 NPM에 등록되어 있습니다."
                    imageSrc={routerUrlOf('/images/home/nodejs2.png')}
                    href="https://www.npmjs.com/package/@ktaicoder/hw-control"
                />
                <Typography variant="h6" sx={{ color: '#222', fontWeight: 400, mt: 8, mb: 2 }}>
                    코딩팩
                </Typography>
                <PageLink
                    className={pageLinkClassName}
                    title="코딩팩 블록 드라이버"
                    subtitle="GITHUB에 공개된 코딩팩 블록드라이버 소스코드입니다."
                    imageSrc={routerUrlOf('/images/home/console.png')}
                    href="https://aicodingblock.kt.co.kr"
                />
            </Box>
        </Box>
    )
}
