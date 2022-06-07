import { Box, Grid, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub2() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                2. Select target - 이미지 파일 복사할 SD카드 선택하기
            </Typography>

            <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                            display: 'flex',
                            background: '#fff',
                            p: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            className="lightbox"
                            src={routerUrlOf('/images/codingpack/select_target1.png')}
                            sx={{
                                objectFit: 'contain', //
                                width: '180px',
                                maxWidth: '100%',
                            }}
                            alt=""
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                            display: 'flex',
                            background: '#fff',
                            p: 2,
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            className="lightbox"
                            src={routerUrlOf('/images/codingpack/select_target2.png')}
                            sx={{
                                objectFit: 'contain',
                                width: '400px',
                                maxWidth: '100%',
                            }}
                            alt=""
                        />
                    </Box>
                </Grid>
            </Grid>

            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="컴퓨터에 SD카드 리더기(USB)를 삽입하고 내 PC에 연결되었는지 확인합니다." />
                <ListText text="위 그림에서는 E와 G드라이브로 연결되었는데, PC 마다 드라이브 문자는 다를 수 있습니다" />
                <ListText text="탐색기에서 드라이브 선택시 내용을 읽을 수 없다는 알림은 무시하면 됩니다." />
            </ListTextBox>

            <ImageBox mt={8}>
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/select_target3.png')}
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </ImageBox>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="다시 에처(Etcher)로 돌아와서 Select target 버튼을 누른 후 SD 카드 드라이브를 선택해주세요." />
            </ListTextBox>
        </Box>
    )
}
