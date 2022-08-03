import { Box, Grid, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub2() {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                2. 대상 SD 카드 선택
            </Typography>

            <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={12} md={5} >
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

            </Grid>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="컴퓨터에 SD카드 리더기(USB)를 삽입하고 내 PC에 연결되었는지 확인합니다." />
                <ListText text="SD카드를 꽂으면 탐색기가 실행될 수도 있는데, 그냥 닫으면 됩니다." />
                <ListText text="이 과정에서 아래의 오류 또는 경고창이 발생할 수 있는데, 무시하면 됩니다." />
                <ListText text="이미지를 굽는 과정에서 경고창들이 또 표시될 수 있습니다. OS 이미지는 특수한 방식으로 만들기 때문에 이런 경고창들이 뜨는 것으로 이해하고, 무시하면 됩니다." />
            </ListTextBox>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    p: 2,
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/imager_ignoremessages.png')}
                    sx={{
                        objectFit: 'contain',
                        mt: 2,
                        width: '500px',
                        maxWidth: '100%',
                    }}
                    alt=""
                />
            </Box>

            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="이미저(Imager)에서 `저장소 선택`을 클릭하여 SD카드를 선택합니다." />
            </ListTextBox>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    p: 2,
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/imager_sdcardselect.png')}
                    sx={{
                        objectFit: 'contain',
                        width: '600px',
                        maxWidth: '100%',
                    }}
                    alt=""
                />
            </Box>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="이제 다음 단계에서 이미지 파일을 굽게 됩니다." />
            </ListTextBox>

        </Box>
    )
}
