import { Box, Stack, SxProps, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { routerFullUrlOf, routerPush } from 'src/lib/urls'
import SetupStepLink from './codingpack-setup-step-links/SetupStepLink'

const DATA = [
    {
        chapter: 1,
        title: '아두이노란',
        href: 'arduino-explained',
    },
    {
        chapter: 2,
        title: '아두이노 종류',
        href: 'arduino-types',
    },
    {
        chapter: 3,
        title: '아두이노 활용',
        href: 'arduino-utilizing',
    },
    {
        chapter: 4,
        title: '아두이노 우노 하드웨어',
        href: 'arduino-uno-hardware',
    },
    {
        chapter: 5,
        title: '아두이노 소프트웨어 통합개발환경 v1',
        href: 'arduino-software-ide-v1',
    },
    {
        chapter: 6,
        title: '아두이노 사용방법',
        href: 'arduino-how-to-use',
    },
    {
        chapter: 7,
        title: '디지털 핀',
        href: 'arduino-digital-pin',
    },
    {
        chapter: 8,
        title: '아날로그 핀',
        href: 'arduino-analog-pin',
    },
    {
        chapter: 9,
        title: '아두이노 라이브러리 ',
        href: 'arduino-library',
    },
    {
        chapter: 10,
        title: '전기에 대해서',
        href: 'arduino-electricity',
    },
    {
        chapter: 11,
        title: '옴의 법칙',
        href: 'arduino-ohms-law',
    },
    {
        chapter: 12,
        title: '아날로그와 디지털의 차이',
        href: 'arduino-analog-vs-digital',
    },
]

type Props = {
    currentChapter: number
    next?: boolean
    sx?: SxProps
}

export default function ArduinoHelpLinks(props: Props) {
    const { currentChapter, next, sx } = props

    let guideMsg = ''
    if (currentChapter >= 1 && currentChapter <= DATA.length) {
        if (next) {
            guideMsg =
                currentChapter === DATA.length
                    ? '마지막 단계입니다. ☺'
                    : `이제 ${currentChapter + 1}단계를 진행해주세요`
        } else {
            guideMsg = `지금 ${currentChapter}단계 가이드를 보고 있습니다`
        }
    }

    const _openLink = (aHref: string) => {
        let href = aHref
        let linkStyle = ''
        if (window.self === window.top || window.parent === window.top) {
            linkStyle = 'page'
        } else {
            linkStyle = 'new'
        }
        if (linkStyle === 'new') {
            if (href.startsWith('http')) {
                window.open(href, '_blank')
            } else {
                if (href.startsWith('/post/')) {
                    href = href.replace('/post/', '/post-frame/')
                }
                href = routerFullUrlOf(href)
                window.open(href, '_blank')
            }
        } else {
            routerPush(href)
        }
    }

    return (
        <Box className="ArduinoHelpLinks-root" mt="2px" sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
            <Stack
                direction="column"
                spacing={0}
                sx={{
                    minWidth: '340px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    px: 1,
                    py: 1,
                }}
            >
                <Box mb={2}>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.main', textAlign: 'center', fontWeight: 600 }}>
                        • 아두이노 도움말 목차 •
                    </Typography>
                    {guideMsg && (
                        <Typography
                            variant="body1"
                            sx={{
                                textAlign: 'center',
                                fontSize: '0.8rem',
                                color: next ? 'secondary.main' : '#3F617D',

                                fontWeight: next ? 600 : 400,
                            }}
                        >
                            {guideMsg}
                        </Typography>
                    )}
                </Box>
                <Grid container direction="row">
                    <Grid xs={12} md={6}>
                        {DATA.filter((data) => data.chapter <= 6).map((item) => (
                            <SetupStepLink
                                key={item.chapter}
                                onClick={() => _openLink(item.href)}
                                active={item.chapter === currentChapter}
                                stepNumber={item.chapter}
                                title={item.title}
                            />
                        ))}
                    </Grid>
                    <Grid xs={12} md={6}>
                        {DATA.filter((data) => data.chapter > 6).map((item) => (
                            <SetupStepLink
                                key={item.chapter}
                                onClick={() => _openLink(item.href)}
                                active={item.chapter === currentChapter}
                                stepNumber={item.chapter}
                                title={item.title}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}
