import { routerPush, routerFullUrlOf } from 'src/lib/urls'
import { Box, Stack, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import SetupStepLink from 'src/components/codingpack-setup-step-links/SetupStepLink'

const DATA = [
    {
        stepNumber: 1,
        title: 'OS 이미지 굽기',
        href: '/codingpack/os-image-guide',
    },
    {
        stepNumber: 2,
        title: 'SD 카드 확장하기',
        href: '/post-frame/codingpack-how-to-expand-sdcard',
    },
    {
        stepNumber: 3,
        title: '네트워크 연결하기',
        href: '/post-frame/codingpack-how-to-config-network',
    },
    {
        stepNumber: 4,
        title: '코딩팩 업데이트 하기',
        href: '/post-frame/codingpack-how-to-codingpack-update',
    },
    {
        stepNumber: 5,
        title: '시스템 초기화 하기',
        href: '/post-frame/codingpack-how-to-system-reset',
    },
]

type Props = {
    currentStep: number
    next?: boolean
    sx?: SxProps
}

export default function CodingpackSetupStepLinks(props: Props) {
    const { currentStep, next, sx } = props

    let guideMsg = ''
    if (currentStep >= 1 && currentStep <= DATA.length) {
        if (next) {
            guideMsg =
                currentStep === DATA.length ? '마지막 단계입니다. ☺' : `이제 ${currentStep + 1}단계를 진행해주세요`
        } else {
            guideMsg = `지금 ${currentStep}단계 가이드를 보고 있습니다`
        }
    }

    const _openLink = (href: string) => {
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
        <Box mt="2px" sx={{ display: 'flex', justifyContent: 'center', ...sx }}>
            <Stack
                direction="column"
                spacing={0}
                sx={{
                    minWidth: '320px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    px: 1,
                    py: 1,
                }}
            >
                <Box mb={1}>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.main', textAlign: 'center', fontWeight: 600 }}>
                        • 코딩팩 OS 이미지 제작 순서 •
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
                {DATA.map((item) => (
                    <SetupStepLink
                        key={item.stepNumber}
                        onClick={() => _openLink(item.href)}
                        active={item.stepNumber === currentStep}
                        stepNumber={item.stepNumber}
                        title={item.title}
                    />
                ))}
            </Stack>
        </Box>
    )
}
