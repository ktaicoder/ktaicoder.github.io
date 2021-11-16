import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function AfterStepPart3() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', mt: 10, ml: 4, fontWeight: 600 }}>
                +3. 시스템 초기화
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    mt: 4,
                    px: smDown ? 2 : 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
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
                <Typography variant="caption">바탕화면의 시스템 초기화 실행</Typography>
            </Box>
            <ListTextBox sx={{ mt: 0 }}>
                <ListText text="시스템 초기화를 실행하기 전에 인터넷 연결을 확인해주세요" />
                <ListText text="시스템 초기화 버튼을 누르면 몇 분동안 초기화를 실행한 후 자동으로 재부팅합니다." />
                <ListText text="네트워크 상태에 따라 시간이 걸릴 수 있습니다" />
            </ListTextBox>
        </Box>
    )
}
