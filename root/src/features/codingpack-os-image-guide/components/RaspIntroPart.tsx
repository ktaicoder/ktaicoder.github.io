import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'

export default function RaspIntroPart() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
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
                    콘텐츠를 재미있게 즐기도록 개발하였습니다. 라즈베리 파이에 코딩팩을 구동하기 위해 먼저 OS 이미지를
                    변환하는 방법을 3단계로 알려드리겠습니다.
                </Typography>
            </Box>
        </Box>
    )
}
