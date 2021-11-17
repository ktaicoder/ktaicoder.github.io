import { Box, Grid, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub1() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', ml: 4, fontWeight: 600 }}>
                1. Flash from file - 이미지 파일 선택
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Box
                        component="img"
                        className="lightbox"
                        src={routerUrlOf('/images/codingpack/flash_from_file1.png')}
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box
                        component="img"
                        className="lightbox"
                        src={routerUrlOf('/images/codingpack/flash_from_file2.png')}
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                        }}
                    />
                </Grid>
            </Grid>

            <ListTextBox>
                <ListText text="에처(Etcher)를 실행하면 위 그림과 같은 화면이 나옵니다." />
                <ListText text="Flash from file을 선택하여 압축 해제한 img 파일을 넣어주세요." />
            </ListTextBox>
        </Box>
    )
}
