import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { routerPush } from 'src/lib/urls'

export default function AfterStepPart4() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', mt: 6, fontWeight: 600 }}>
                4. 시스템 복구
            </Typography>

            <Box sx={{ mt: 2, p: 3, background: '#F6F6F6', borderRadius: '10px' }}>
                <Typography variant="h6" sx={{ color: 'error.main', fontSize: '1.1rem' }}>
                    시스템 초기화가 실패하셨나요?
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        mb: 1,
                        fontSize: '0.9rem',
                        lineHeight: '1.4rem',
                    }}
                >
                    시스템 초기화가 실패하면, 한번 더 시도해보세요. <br />
                    대부분 한번 더 초기화를 실행하면 해결이 되지만, 만약 그래도 안 된다면 복구가 필요합니다.
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        mb: 3,
                        fontSize: '0.9rem',
                        lineHeight: '1.4rem',
                    }}
                >
                    시스템 초기화 중에 실수로 전원을 꺼서 복구를 해야 하는 경우가 간혹있습니다.
                    <br />
                    아래 문서를 참고하여 시스템 복구를 해주세요.
                </Typography>
                <Box mt={1}>
                    <Button
                        size="large"
                        variant="outlined"
                        onClick={() => routerPush('/post/codingpack-how-to-system-reset')}
                        endIcon={<ChevronRightIcon />}
                    >
                        `시스템 초기화 및 복구` 가이드
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
