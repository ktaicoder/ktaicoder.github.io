import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'

export default function OsImageWritePartSub1() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const down700 = useMediaQuery(theme.breakpoints.down(720))

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', ml: 4, fontWeight: 600 }}>
                1. Flash from file - 이미지 파일 선택
            </Typography>
            <Box sx={{ display: 'flex', maxWidth: '100%', flexDirection: smDown ? 'column' : 'row' }}>
                <Box
                    sx={{
                        flexBasis: smDown ? '100%' : '60%', //
                        p: 2,
                    }}
                >
                    <Box
                        component="img"
                        className="lightbox"
                        src="/images/codingpack/flash_from_file1.png"
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        flexBasis: smDown ? '100%' : '40%', //
                        p: 2,
                    }}
                >
                    <Box
                        component="img"
                        className="lightbox"
                        src="/images/codingpack/flash_from_file2.png"
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
                <ListText text="에처(Etcher)를 실행하면 위 그림과 같은 화면이 나옵니다." />
                <ListText text="Flash from file을 선택하여 압축 해제한 img 파일을 넣어주세요." />
            </Box>
        </Box>
    )
}
