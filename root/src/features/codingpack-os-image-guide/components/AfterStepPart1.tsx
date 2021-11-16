import { Box, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import ListText from './ListText'
import ListTextBox from './ListTextBox'
import StepTitle from './StepTitle'

export default function AfterStepPart1() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ display: 'block', mt: 10 }}>
            <StepTitle step="추가 단계" title="이미지 구운 후에 해야 할 일" />
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 2, '& > div + div': { mt: 1 } }}>
                <ListText text="OS 이미지를 구운 직후 제일 먼저해야 할 일은 SD 카드 디스크를 확장하는 일입니다" />
                <ListText text="16GB 또는 32GB 크기의 SD 카드인데도, OS 이미지를 구운 직후에는 8GB로 인식합니다" />
                <ListText text="나머지 공간도 사용하려면 SD 카드를 확장해주어야 합니다" />
            </Box>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', mt: 6, ml: 4, fontWeight: 600 }}>
                +1. SD 카드 확장
            </Typography>
            <Box
                sx={{
                    py: 2,
                    mt: 2,
                    borderRadius: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{ width: '100%', maxWidth: 560 }}
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/booting1.png')}
                />
            </Box>

            <ListTextBox sx={{ mt: 2 }}>
                <ListText text="터미널 창을 열어서 sudo raspi-config 을 입력합니다." />
            </ListTextBox>

            <Box
                sx={{
                    display: 'flex',
                    mt: 8,
                    px: smDown ? 2 : 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/booting2.png')}
                    sx={{
                        objectFit: 'contain', //
                        width: '100%',
                        height: '100%',
                        maxWidth: 500,
                    }}
                />
                <Typography variant="caption">7. Advanced Options 선택</Typography>
            </Box>
            <Box sx={{ background: '#F6F6F6', px: 3, py: 3, mt: 0, '& > div + div': { mt: 1 } }}>
                <ListText text="위와 같이 7. Advanced Options 메뉴를 선택하세요." />
                <ListText text="마우스는 사용할 수 없고, 키보드의 화살표, 탭, 엔터키만 사용할 수 있습니다" />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    mt: 8,
                    px: smDown ? 2 : 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/booting3.png')}
                    sx={{
                        objectFit: 'contain', //
                        width: '100%',
                        height: '100%',
                        maxWidth: 500,
                    }}
                />
                <Typography variant="caption">A1 Expand Filesystem 선택</Typography>
            </Box>
            <ListTextBox sx={{ mt: 0 }}>
                <ListText text="위와 같이 A1 Expand Filesystem 메뉴를 선택하세요." />
            </ListTextBox>

            <Box
                sx={{
                    display: 'flex',
                    mt: 8,
                    px: smDown ? 2 : 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    component="img"
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/booting5.png')}
                    sx={{
                        objectFit: 'contain', //
                        width: '100%',
                        height: '100%',
                        maxWidth: 500,
                    }}
                />
                <Typography variant="caption">재부팅을 물어보면 재부팅하세요</Typography>
            </Box>
            <ListTextBox>
                <ListText text="이제 SD 카드가 확장되었습니다. 재부팅 하세요." />
            </ListTextBox>
        </Box>
    )
}
