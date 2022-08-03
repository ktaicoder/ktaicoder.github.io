import { Box, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub1() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                1. 이미지 파일 선택
            </Typography>
            <Box
                component="img"
                className="lightbox"
                src={routerUrlOf('/images/codingpack/imager_fileselect.png')}
                sx={{
                    mt: 2,
                    objectFit: 'contain', //
                    width: '100%',
                    height: '100%',
                }}
            />

            <ListTextBox sx={{ mt: 3 }}>
                <ListText text="다운로드 받은 이미지 파일의 압축을 해제하여 .img 파일을 준비합니다." />
                <ListText text="이미저 프로그램에서 `운영체제 OS 선택`을 클릭하여, 압축해제한 이미지(.img) 파일을 선택합니다." />
            </ListTextBox>
        </Box>
    )
}
