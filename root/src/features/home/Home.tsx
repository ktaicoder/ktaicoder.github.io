import { Box, ButtonBase, Container, Typography } from '@mui/material'
import { Link } from 'src/components/link'
import { routerPush, routerUrlOf } from 'src/lib/urls'

export default function Home() {
    return (
        <Box sx={{ p: 8 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <ButtonBase
                    sx={{
                        fontSize: '1.5rem',
                        borderRadius: '28px',
                        backgroundColor: '#3F617D',
                        display: 'inline',
                        px: 6,
                        py: 1,
                        my: 2,
                        color: '#fff',
                        textDecoration: 'none',
                    }}
                    component="div"
                    onClick={() => routerPush('/hw/guide')}
                >
                    하드웨어 개발자 가이드
                </ButtonBase>
                <ButtonBase
                    sx={{
                        fontSize: '1.5rem',
                        borderRadius: '28px',
                        backgroundColor: '#228AA5',
                        display: 'inline',
                        px: 6,
                        py: 1,
                        my: 2,
                        color: '#fff',
                        textDecoration: 'none',
                    }}
                    component="div"
                    onClick={() => routerPush('/codingpack/os-image-guide')}
                >
                    코딩팩 사용자 가이드
                </ButtonBase>
            </Box>
        </Box>
    )
}
