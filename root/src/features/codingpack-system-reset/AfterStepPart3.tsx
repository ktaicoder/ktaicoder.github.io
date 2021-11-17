import { Box, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function AfterStepPart3() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                3. 시스템 초기화
            </Typography>
            <ImageBox sx={{ mt: 4 }} caption="바탕화면의 시스템 초기화 실행">
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
            </ImageBox>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="시스템 초기화를 실행하기 전에 인터넷 연결을 확인해주세요" />
                <ListText text="시스템 초기화 버튼을 누르면 몇 분동안 초기화를 실행한 후 자동으로 재부팅합니다." />
                <ListText text="네트워크 상태에 따라 시간이 걸릴 수 있습니다" />
            </ListTextBox>
        </Box>
    )
}
