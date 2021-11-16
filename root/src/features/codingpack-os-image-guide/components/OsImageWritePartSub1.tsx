import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'

export default function OsImageWritePartSub1() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

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
                        src={routerUrlOf('/images/codingpack/flash_from_file1.png')}
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
                        src={routerUrlOf('/images/codingpack/flash_from_file2.png')}
                        sx={{
                            objectFit: 'contain', //
                            width: '100%',
                            height: '100%',
                            border: '1px solid #ddd',
                        }}
                    />
                </Box>
            </Box>
            <ListTextBox>
                <ListText text="에처(Etcher)를 실행하면 위 그림과 같은 화면이 나옵니다." />
                <ListText text="Flash from file을 선택하여 압축 해제한 img 파일을 넣어주세요." />
            </ListTextBox>
        </Box>
    )
}
