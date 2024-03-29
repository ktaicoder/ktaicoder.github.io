import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub4() {
    const theme = useTheme()

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', fontWeight: 600 }}>
                4. 코디니팩에 SD 카드 삽입
            </Typography>

            <ImageBox mt={2}>
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/imager_completed.png')}
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </ImageBox>
            <ListTextBox sx={{ mt: 1 }}>
                <ListText text="굽기가 완료되면 위와 같이 `쓰기 완료` 알림이 표시됩니다." />
                <ListText text="이제 이미저(Imager)를 닫고 컴퓨터에서 SD 카드를 빼주세요." />
            </ListTextBox>

            <ImageBox mt={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box
                            component="img"
                            className="lightbox"
                            src={routerUrlOf('/images/codingpack/codingpack_sd1.png')}
                            sx={{
                                // flexBasis: smDown ? '100%' : '50%', //
                                objectFit: 'contain', //
                                width: '100%',
                                height: '100%',
                                maxHeight: '200px',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box
                            component="img"
                            className="lightbox"
                            src={routerUrlOf('/images/codingpack/codingpack_sd2.png')}
                            sx={{
                                padding: theme.spacing(2),
                                objectFit: 'contain', //
                                width: '100%',
                                height: '100%',
                                maxHeight: '200px',
                            }}
                        />
                    </Grid>
                </Grid>
            </ImageBox>
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="코디니팩에 SD카드를 삽입한 후 전원을 넣으면, 이용할 수 있습니다." />
            </ListTextBox>
        </Box>
    )
}
