import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'
import StepTitle from './StepTitle'

export default function AfterStepPart3() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
                    src="/images/codingpack/reset1.png"
                    sx={{
                        objectFit: 'contain', //
                        width: '100%',
                        height: '100%',
                        maxWidth: '100%',
                    }}
                />
                <Typography variant="caption">바탕화면의 시스템 초기화 실행</Typography>
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 0, '& > div + div': { mt: 1 } }}>
                <ListText text="시스템 초기화를 실행하기 전에 인터넷 연결을 확인해주세요" />
                <ListText text="시스템 초기화 버튼을 누르면 몇 분동안 초기화를 실행한 후 자동으로 재부팅합니다." />
                <ListText text="네트워크 상태에 따라 시간이 걸릴 수 있습니다" />
            </Box>
        </Box>
    )
}
