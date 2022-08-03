import { Box } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'
import StepTitle from './StepTitle'

export default function OsImageWritePart() {
    return (
        <Box sx={{ display: 'block', mt: 10 }}>
            <StepTitle step="3단계" title="SD카드에 OS 이미지 굽기" />
            <Box
                sx={{
                    py: 2,
                    mt: 6,
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{ width: '100%', maxWidth: 560 }}
                    component="img"
                    src={routerUrlOf('/images/codingpack/imager_intro.jpg')}
                />
            </Box>
            <ListTextBox>
                <ListText text="OS 이미지는 일반적인 파일과는 달라서 이미저(Imager) 프로그램을 사용하여 복사해야 합니다." />
                <ListText text="위 그림은 이미저를 실행한 모습입니다." />
                <ListText text="16GB이상 용량의 SD카드와 컴퓨터에 연결할 USB SD카드 리더기를 준비해주세요." />
                <ListText text="CD 이미지를 굽는 것과 비슷합니다. 아래 설명을 보고 따라해주세요." />
            </ListTextBox>
        </Box>
    )
}
