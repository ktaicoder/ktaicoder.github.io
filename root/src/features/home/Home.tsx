import ChevronRight from '@mui/icons-material/ChevronRight'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'

export default function Home() {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ p: smDown ? 3 : 8 }}>
            <Grid container sx={{ minHeight: '700px' }} spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} style={{ border: '0px solid red' }}>
                    <Box
                        sx={{
                            height: smDown ? 'auto' : '80vh',
                            position: 'relative',
                            minHeight: smDown ? 'auto' : '600px',
                            pl: mdDown ? 0 : 6,
                            // maxWidth: mdDown ? undefined : '560px',
                            maxWidth: '560px',
                            border: '0px solid blue',
                            display: 'flex',
                            margin: theme.spacing(0, 'auto'),
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: smDown ? '40px' : '56px',
                                fontFamily: 'Black Han Sans',
                                lineHeight: 1.5,
                                display: 'flex',
                                mt: smDown ? 4 : 0,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                color: '#0A1929',
                            }}
                        >
                            <Box>AI 코딩블록</Box>
                            <Box sx={{ color: '#005CB8' }}>개발자</Box>
                            <Box>가이드</Box>
                        </Box>
                        <Box
                            sx={{
                                '& em': {
                                    color: 'primary.dark',
                                    fontStyle: 'normal',
                                    mx: '4px',
                                },
                            }}
                        >
                            <Box sx={{ color: '#555', fontSize: '1rem', fontWeight: 400, mt: mdDown ? 8 : 2 }}>
                                AI 코딩블록 개발자 가이드를 설명하는 사이트입니다.
                                <em>AI 코딩블록 사이트</em>의 기술적인 설명을 정리하고 있습니다.
                            </Box>
                            <Box sx={{ color: '#555', fontSize: '1rem', fontWeight: 400, mt: 2 }}>
                                KT의 AI 코딩블록은 많은 부분을 <em>오픈 소스</em>로 진행하고 있습니다. <em>GITHUB</em>에
                                공개된 소스코드를 확인할 수 있습니다.
                            </Box>
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: smDown ? '90px' : '100px',
                                ...(smDown && {
                                    width: '100px',
                                    height: '135px',
                                }),
                                ...(!smDown && {
                                    width: '116px',
                                    height: '156.8px',
                                }),
                            }}
                            src={routerUrlOf('/images/codiny/3d_movement1.png')}
                        />

                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ChevronRight fontSize="small" />}
                                onClick={() => window?.open('https://aicodingblock.kt.co.kr')}
                            >
                                AI 코딩블록 {!smDown && '사이트'}
                            </Button>
                            <Button
                                sx={{ ml: 2 }}
                                variant="contained"
                                size="large"
                                endIcon={<GitHubIcon fontSize="small" />}
                                onClick={() => window?.open('https://github.com/ktaicoder')}
                            >
                                GITHUB
                            </Button>
                        </Box>
                        <Box sx={{ mt: 6, color: '#555', fontSize: '0.85rem', fontWeight: 400 }}>
                            아직 부족한 점이 많지만 점점 발전하는 KT의 AI 코딩블록을 지켜봐주세요.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} style={{ border: '0px solid green' }}>
                    <Box
                        sx={{
                            p: 2,
                            bgcolor: '#F3F6F9',
                            height: '80vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            minHeight: '600px',
                            justifyContent: 'center',
                            borderRadius: 2,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ fontSize: '32px', fontFamily: 'Black Han Sans', lineHeight: 1.5 }}
                        >
                            KT AI 코딩블록이란?
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                                fontSize: mdDown ? '0.95rem' : '1.0rem',
                                color: '#333',
                                textAlign: 'center',
                                fontWeight: 400,
                                letterSpacing: -1,
                                lineHeight: 1.8,
                            }}
                        >
                            {smDown ? (
                                <Box>
                                    <Box>
                                        KT AI 코딩블록은 ‘인공지능’, ‘사물인터넷’, ‘빅데이터’ 등의 세상의 기술들을 쉽게
                                        학습하고 구현할 수 있는 소프트웨어 코딩 교육 플랫폼입니다.
                                    </Box>
                                    <Box mt={3}>
                                        내 아이디어를 블록코딩으로 설계하고 KT AI 코딩팩을 활용해 실제 환경에서 대화하고
                                        동작하도록 구현할 수 있습니다.
                                    </Box>
                                </Box>
                            ) : (
                                <>
                                    <Box>
                                        KT AI 코딩블록은 ‘인공지능’, ‘사물인터넷’, ‘빅데이터’ 등의 세상의 기술들을
                                    </Box>
                                    <Box>쉽게 학습하고 구현할 수 있는 소프트웨어 코딩 교육 플랫폼입니다.</Box>
                                    <Box>내 아이디어를 블록코딩으로 설계하고 KT AI 코딩팩을 활용해 </Box>
                                    <Box>실제 환경에서 대화하고 동작하도록 구현할 수 있습니다.</Box>
                                </>
                            )}
                        </Box>
                        <Box
                            component="img"
                            sx={{ mt: 6, p: 2, maxWidth: '100%' }}
                            src="https://aicodingblock.kt.co.kr/images/intro/img_intro1_1.png"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
