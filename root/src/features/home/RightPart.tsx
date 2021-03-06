import { Box, Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMeasure } from 'react-use'
import { routerPush, routerUrlOf } from 'src/lib/urls'

export default function RightPart() {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [containerRef, { width: containerWidth }] = useMeasure()
    const isNarrow = !isNaN(containerWidth) && containerWidth > 0 && containerWidth < 560

    return (
        <Box
            sx={{
                border: '0px solid blue',
                py: 8,
                px: 4,
                background: '#F3F6F9',
                ...(lgUp && {
                    minHeight: '700px',
                    height: 'calc(100vh - 80px)',
                    overflow: 'auto',
                }),
                ...(!smDown && !isNarrow && {}),
            }}
            ref={containerRef}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={isNarrow ? 12 : 6}>
                    <Box
                        sx={{
                            border: '0px solid red',
                            display: 'flex',
                            flexDirection: 'column',
                            ...(lgUp &&
                                !isNarrow && {
                                minHeight: '700px',
                                height: 'calc(100vh - 200px)',
                            }),
                            alignItems: 'center',
                            '& > div': {
                                maxWidth: '500px',
                                width: '100%',
                            },
                        }}
                    >
                        <Paper sx={{ mt: 0, p: 3, borderRadius: '16px', color: '#fff', background: '#007FFF' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>AI ?????????????</Typography>
                                {/* <Button sx={{ color: '#fff' }}>??? ??????</Button> */}
                            </Box>

                            <Typography sx={{ mt: 3, fontWeight: 400, fontSize: '1rem' }}>
                                AI ???????????? ??????????????????, ?????????????????????, ?????????????????? ?????? ????????? ???????????? ?????? ????????????
                                ????????? ??? ?????? ??????????????? ?????? ?????? ??????????????????.
                            </Typography>
                            <Box sx={{ mt: 2, mb: 1, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%', maxWidth: '120px' }}
                                    src={routerUrlOf('/images/home/ic_intro4.png')}
                                />
                            </Box>
                        </Paper>

                        <Paper sx={{ mt: 2, flex: 1, p: 3, borderRadius: '16px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>PC ????????????</Typography>
                                <Button onClick={() => routerPush('/post-frame/hw-pc-program-guide')}>?????????</Button>
                            </Box>
                            <Box sx={{ mt: 6, mb: 4, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%', maxWidth: '320px' }}
                                    src={routerUrlOf('/images/home/ic_intro2.png')}
                                />
                            </Box>
                            <Typography sx={{ p: 2, fontWeight: 400, fontSize: '1rem' }}>
                                ???????????? ????????? ?????? PC??? ?????????????????????. electron ???????????? ?????????????????????.
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={isNarrow ? 12 : 6}>
                    <Box
                        sx={{
                            border: '0px solid red',
                            ...(lgUp &&
                                !isNarrow && {
                                minHeight: '700px',
                                height: 'calc(100vh - 200px)',
                            }),
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > div': {
                                maxWidth: '500px',
                                width: '100%',
                            },
                        }}
                    >
                        <Paper sx={{ mt: 0, flex: 1, p: 3, borderRadius: '16px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
                                    ???????????? OS ????????? ??????
                                </Typography>
                                <Button onClick={() => routerPush('/codingpack/os-image-guide')}>?????????</Button>
                            </Box>
                            <Box sx={{ mt: 6, mb: 1, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    sx={{ width: '100%', maxWidth: '120px' }}
                                    src={routerUrlOf('/images/home/ic_intro3.png')}
                                />
                            </Box>
                            <Typography sx={{ p: 2, fontWeight: 400, fontSize: '1rem' }}>
                                ???????????? ???????????? ?????? ???????????? ??????????????? ???????????? ???????????? ????????? ?????? ????????????
                                ????????? ???????????? ???????????? ???????????? ?????????????????????.
                            </Typography>
                        </Paper>

                        <Paper
                            sx={{
                                mt: 2,
                                p: 0,
                                position: 'relative',
                                borderRadius: '16px',
                                overflow: 'hidden',
                            }}
                            elevation={2}
                        >
                            <Box
                                component="img"
                                sx={{ width: '100%', background: '#160A2C', transform: 'scale(1.05)' }}
                                src={routerUrlOf('/images/home/ic_intro1.png')}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    position: 'absolute',
                                    fontFamily: 'Black Han Sans',
                                    fontSize: '1.5rem',
                                    letterSpacing: 2,
                                    top: 32,
                                    left: 24,
                                    color: '#fff',
                                }}
                            >
                                AI ?????????
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
