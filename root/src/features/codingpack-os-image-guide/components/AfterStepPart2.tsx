import { Box, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function AfterStepPart2() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                2. 인터넷 연결
            </Typography>
            <ImageBox mt={4} caption="KT AI Codiny Pack 네트워크 설정화면">
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
            </ImageBox>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="와이파이 또는 랜선(이더넷)을 연결해주세요." />
            </ListTextBox>
        </Box>
    )
}
