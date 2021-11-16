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
                2. Select target - 이미지 파일 복사할곳 연결하기
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
                <ListText text="컴퓨터에 SD카드와 연결된 리더기(USB)를 삽입하고 내PC에 연결되었는지 확인합니다." />
                <ListText text="아직 부팅 전이라 데이터를 읽지못한다는 창이 뜨면 닫아주세요." />
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
                <ListText text="다시 에처(Etcher)로 돌아와서 Select target버튼을 누른 후 부팅할 파일을 선택해주세요." />
            </Box>
        </Box>
    )
}
