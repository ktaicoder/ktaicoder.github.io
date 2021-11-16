import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'

export default function OsImageWritePartSub2() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', ml: 4, fontWeight: 600 }}>
                2. Select target - 이미지 파일 복사할 SD카드 선택하기
            </Typography>
            <Box sx={{ display: 'flex', maxWidth: '100%', flexDirection: smDown ? 'column' : 'row' }}>
                <Box
                    sx={{
                        flexBasis: smDown ? '100%' : '40%', //
                        p: 2,
                    }}
                >
                    <Box
                        component="img"
                        className="lightbox"
                        src="/images/codingpack/select_target1.png"
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flexBasis: smDown ? '100%' : '60%', //
                        p: 2,
                    }}
                >
                    <Box
                        component="img"
                        className="lightbox"
                        src="/images/codingpack/select_target2.png"
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 6, '& > div + div': { mt: 1 } }}>
                <ListText text="컴퓨터에 SD카드 리더기(USB)를 삽입하고 내 PC에 연결되었는지 확인합니다." />
                <ListText text="위 그림에서는 E와 G드라이브로 연결되었는데, PC 마다 드라이브 문자는 다를 수 있습니다" />
                <ListText text="드라이브를 선택시 내용을 읽을 수는 없다는 알림은 무시하면 됩니다." />
            </Box>

            <Box
                sx={{
                    p: 3,
                    mt: 10,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src="/images/codingpack/select_target3.png"
                    sx={{
                        objectFit: 'contain', //
                        maxWidth: 600,
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                    }}
                />
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 1, '& > div + div': { mt: 1 } }}>
                <ListText text="다시 에처(Etcher)로 돌아와서 Select target 버튼을 누른 후 SD 카드 드라이브를 선택해주세요." />
            </Box>
        </Box>
    )
}
