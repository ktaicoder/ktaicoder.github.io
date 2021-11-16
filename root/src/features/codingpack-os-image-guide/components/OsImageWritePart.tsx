import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListText from './ListText'
import StepTitle from './StepTitle'

export default function OsImageWritePart() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box sx={{ display: 'block', mt: 10 }}>
            <StepTitle step="3단계" title="SD카드에 OS 이미지 굽기" />
            <Box
                sx={{
                    backgroundColor: '#3F617D',
                    py: 2,
                    mt: 6,
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ width: '100%', maxWidth: 560 }} component="img" src="/images/codingpack/etcher_intro.gif" />
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 6, '& > div + div': { mt: 1 } }}>
                <ListText text="OS 이미지는 일반적인 파일과는 달라서 에처(Etcher) 프로그램을 사용하여 복사해야 합니다." />
                <ListText text="8GB이상 용량의 빈 SD카드와 컴퓨터에 연결할 USB SD카드리더기를 준비해주세요." />
                <ListText text="CD 이미지를 굽는 것과 비슷합니다. 아래 설명을 보고 따라해주세요." />
            </Box>
        </Box>
    )
}
