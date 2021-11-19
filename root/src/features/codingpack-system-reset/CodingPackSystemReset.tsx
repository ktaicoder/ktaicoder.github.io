import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import GuideTitle from 'src/components/guide-title/GuideTitle'
import ImageViewerContainer from 'src/components/image-viewer-container/ImageViewerContainer'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from '../codingpack-os-image-guide/components/ImageBox'
import ListText from '../codingpack-os-image-guide/components/ListText'
import ListTextBox from '../codingpack-os-image-guide/components/ListTextBox'

function randomNumericString() {
    return Math.random().toString().substring(2)
}

export default function CodingPackSystemReset() {
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
        <Box
            sx={{
                pt: 2,
                mt: 5,
                pb: 15,
                '& em': {
                    fontStyle: 'normal',
                    color: 'primary.main',
                    ml: '2px',
                    mr: '4px',
                    fontWeight: 500,
                },
            }}
        >
            <Container maxWidth="md" component="div" ref={containerRef} style={{ maxWidth: 760 }}>
                <Box>
                    <GuideTitle title="코딩팩 시스템 초기화" />

                    <Box sx={{ mt: 6 }}>
                        <Box
                            component="ul"
                            sx={{
                                py: 3,
                                pl: 3,
                                background: '#f0f0f0',
                                borderRadius: 2,
                                listStyle: 'disc',
                                listStylePosition: 'inside',
                                '& li + li': {
                                    mt: 1,
                                },
                            }}
                        >
                            <li>
                                코딩팩을 사용하다가 예상치 못한 문제가 생긴 경우, <em>시스템 초기화</em>가 필요할 수
                                있습니다.
                            </li>
                            <li>
                                또는 AI 코딩블록 사이트의 메이저(Major) 업데이트시 코딩팩의 시스템 초기화가 필요할 수도
                                있습니다. 이 경우는 사전에 공지를 띄울 것입니다.
                            </li>
                            <li>시스템 초기화는 인터넷을 통해 이루어지므로, 반드시 인터넷 연결이 필요합니다.</li>
                        </Box>
                    </Box>

                    <Box mt={10}>
                        시스템 초기화는 코딩팩 바탕화면의 <em>시스템 초기화</em> 아이콘을 더블 클릭하면 실행됩니다
                    </Box>

                    <ImageBox sx={{ mt: 1 }} caption="바탕화면의 시스템 초기화 실행">
                        <Box
                            component="img"
                            className="lightbox"
                            src={routerUrlOf('/images/codingpack/reset1.png')}
                            sx={{
                                objectFit: 'contain', //
                                width: '100%',
                                height: '100%',
                                maxWidth: '100%',
                            }}
                        />
                    </ImageBox>
                    <ListTextBox sx={{ mt: 4 }}>
                        <ListText text="시스템 초기화를 실행하기 전에 인터넷 연결을 확인해주세요" />
                        <ListText text="시스템 초기화 버튼을 누르면 몇 분동안 초기화를 실행한 후 자동으로 재부팅합니다." />
                        <ListText text="네트워크 상태에 따라 시간이 걸릴 수 있습니다" />
                    </ListTextBox>
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
