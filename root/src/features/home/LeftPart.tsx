import ChevronRight from '@mui/icons-material/ChevronRight'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMeasure } from 'react-use'
import { routerUrlOf } from 'src/lib/urls'

export default function LeftPart() {
    const theme = useTheme()
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    ...(!isNarrow && {
                        pl: 6,
                        pr: 2,
                        mr: 1,
                        minHeight: '600px',
                        height: 'calc(100vh - 80px)',
                    }),
                    ...(isNarrow && {
                        pl: 3,
                        pr: 2,
                        mr: 1,
                    }),
                    position: 'relative',
                    maxWidth: '560px',
                    display: 'flex',
                    border: '0px solid blue',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        fontFamily: 'Black Han Sans',
                        lineHeight: 1.5,
                        display: 'flex',
                        ...(isNarrow && {
                            mt: 8,
                            fontSize: '40px',
                        }),
                        ...(!isNarrow && {
                            fontSize: '56px',
                        }),

                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        color: '#0A1929',
                    }}
                >
                    <Box>AI 코디니</Box>
                    <Box sx={{ color: '#005CB8' }}>사용자</Box>
                    <Box>가이드</Box>
                </Box>
                <Box
                    sx={{
                        '& em': {
                            color: 'primary.dark',
                            fontStyle: 'normal',
                            ml: '4px',
                            mr: '2px',
                        },
                    }}
                >
                    <Box sx={{ color: '#555', fontSize: '1rem', fontWeight: 400, mt: mdDown ? 8 : 2 }}>
                        AI 코디니 사용자 가이드 사이트입니다.
                        <em>AI 코디니 사이트</em>의 기술적인 설명을 정리하고 있습니다.
                    </Box>
                    <Box sx={{ color: '#555', fontSize: '1rem', fontWeight: 400, mt: 2 }}>
                        AI 코디니는 많은 부분을 <em>오픈 소스</em>로 진행하고 있습니다. <em>GITHUB</em>에 공개된
                        소스코드를 확인할 수 있습니다.
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{
                        position: 'absolute',
                        right: '1rem',
                        ...(isNarrow && {
                            top: '120px',
                            width: '90px',
                        }),
                        ...(!isNarrow && {
                            top: '160px',
                            width: '116px',
                        }),
                    }}
                    src={routerUrlOf('/images/codiny/3d_movement1.png')}
                />

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ChevronRight fontSize="small" />}
                        onClick={() => window?.open('https://aicodiny.com')}
                    >
                        AI 코디니 {!smDown && '사이트'}
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
                    아직 부족한 점이 많지만 점점 발전하는 KT의 AI 코디니를 지켜봐주세요.
                </Box>
            </Box>
        </Box>
    )
}
