import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function AfterStepPart2() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

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
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/wifi1.png')}
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
            <ListTextBox>
                <ListText text="와이파이 또는 랜선(이더넷)을 연결해주세요." />
            </ListTextBox>
        </Box>
    )
}
