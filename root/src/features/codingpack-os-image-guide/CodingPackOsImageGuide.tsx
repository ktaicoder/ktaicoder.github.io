import { Box, Container, Divider, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './components/ListText'
import RaspDownloadButton from './components/RaspDownloadButton'
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
        <Box sx={{ p: 2, mt: 5 }}>
            <Container maxWidth="md">
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    라즈베리 파이(Raspberry Pi) OS 만들기
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            ...(smDown && {
                                flexDirection: 'column',
                                alignItems: 'center',
                                px: 0,
                            }),
                            ...(!smDown && {
                                flexDirection: 'row',
                                mt: 4,
                                px: 4,
                            }),
                            maxWidth: 660,
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                border: '0px solid red',
                                ...(smDown && {
                                    width: 120,
                                    height: 120,
                                }),
                                ...(!smDown && {
                                    width: 90,
                                    height: 90,
                                }),
                                '& img': {
                                    width: '100%',
                                    height: '100%',
                                },
                            }}
                        >
                            <img src={routerUrlOf('/images/codingpack/rasp_logo.png')} alt="" />
                        </Box>
                        <Divider light flexItem orientation="vertical" sx={{ mx: 6, my: 0 }} />
                        <Typography variant="body2" sx={{ flex: 1, lineHeight: '1.7rem', mt: smDown ? 3 : 0 }}>
                            라즈베리 파이라는 소형 컴퓨터와 KT AI 코딩팩의 인공지능 기반으로 누구나 쉽고 저렴하게 다양한
                            콘텐츠를 재미있게 즐기도록 개발하였습니다. 라즈베리 파이에 코딩팩을 구동하기 위해 먼저 OS
                            이미지를 변환하는 방법을 3단계로 알려드리겠습니다.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: smDown ? 2 : 10,
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            ...(mdDown && {
                                flexDirection: 'column',
                            }),
                            ...(!mdDown && {
                                width: '100%',
                                px: 10,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                            }),
                        }}
                    >
                        <StepCircle
                            title="1단계"
                            horizontal={mdDown}
                            subtitle="OS 이미지 다운로드"
                            color="#5DA7B4"
                            size={130}
                            imageSrc={routerUrlOf('/images/codingpack/step1.svg')}
                        />

                        {!mdDown && <StepDivider color1="#5DA7B4" color2="#228AA5" height={130} />}

                        <StepCircle
                            title="2단계"
                            horizontal={mdDown}
                            subtitle="에처(Etcher) 프로그램 다운로드"
                            color="#228AA5"
                            size={130}
                            imageSrc={routerUrlOf('/images/codingpack/step2.svg')}
                        />
                        {!mdDown && <StepDivider color1="#228AA5" color2="#3F617D" height={130} />}
                        <StepCircle
                            title="3단계"
                            subtitle="SD카드에 OS 이미지 굽기"
                            color="#3F617D"
                            horizontal={mdDown}
                            size={130}
                            imageSrc={routerUrlOf('/images/codingpack/step3.svg')}
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'block', mt: 18 }}>
                    <StepTitle step="1단계" title="OS 이미지 다운로드" />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            sx={{
                                mt: 4,
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: down700 ? 'column' : 'row',
                                alignItems: 'center',
                                maxWidth: 700,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant="overline">라즈베리파이 3B+</Typography>
                                <RaspDownloadButton
                                    raspVersion="3B+"
                                    onClick={() =>
                                        downloadLink(
                                            'https://aicodingblock.kt.co.kr/_static/codingpack/aicodingpack_2.1.4.zip',
                                        )
                                    }
                                />
                            </Box>
                            {!down700 && (
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        alignSelf: 'flex-end',
                                        height: 56,
                                        mx: 4,
                                    }}
                                />
                            )}

                            <Box
                                sx={{
                                    display: 'flex',
                                    mt: down700 ? 4 : 0,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography variant="overline">라즈베리파이 4B</Typography>
                                <RaspDownloadButton
                                    raspVersion="4B"
                                    onClick={() =>
                                        downloadLink(
                                            'https://aicodingblock.kt.co.kr/_static/codingpack/kt_acp_rpi4__v3.2.zip',
                                        )
                                    }
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 6, '& > div + div': { mt: 1 } }}>
                        <ListText text="버전에 맞는 OS 이미지를 다운로드 후 압축을 해제합니다. (2GB, 약 5분소요)" />
                        <ListText text="압축 해제 시 나오는 img파일을 OS 제작 프로그램을 통해 Write 합니다." />
                        <ListText text="원격제어 시 ID는 pi이며, 암호는 kt123!@# 입니다." />
                    </Box>
                </Box>
                <Box sx={{ display: 'block', mt: 10 }}>
                    <StepTitle step="2단계" title="에처(Etcher) 프로그램 다운로드" />
                </Box>
                <Box sx={{ display: 'block', mt: 10 }}>
                    <StepTitle step="3단계" title="SD카드에 OS 이미지 굽기" />
                </Box>
            </Container>
        </Box>
    )
}
