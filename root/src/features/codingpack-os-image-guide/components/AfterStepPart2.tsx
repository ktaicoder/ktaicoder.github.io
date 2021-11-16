import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'
import StepTitle from './StepTitle'

export default function AfterStepPart2() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', mt: 10, ml: 4, fontWeight: 600 }}>
                +2. 인터넷 연결
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
                    src="/images/codingpack/wifi1.png"
                    sx={{
                        objectFit: 'contain', //
                        width: '100%',
                        height: '100%',
                        maxWidth: 500,
                    }}
                />
                <Typography variant="caption" sx={{ mt: 1 }}>
                    코딩팩 네트워크 설정화면
                </Typography>
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 4, '& > div + div': { mt: 1 } }}>
                <ListText text="와이파이 또는 랜선(이더넷)을 연결해주세요." />
            </Box>
        </Box>
    )
}
