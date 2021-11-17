import { Box, Typography } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import ImageBox from './ImageBox'
import ListText from './ListText'
import ListTextBox from './ListTextBox'
import StepTitle from './StepTitle'

export default function AfterStepPart1() {
    return (
        <Box>
            <StepTitle step="추가 단계" title="이미지 구운 후에 해야 할 일" />
            <ListTextBox sx={{ mt: 4 }}>
                <ListText text="OS 이미지를 구운 직후 제일 먼저해야 할 일은 SD 카드 디스크를 확장하는 일입니다" />
                <ListText text="16GB 또는 32GB 크기의 SD 카드인데도, OS 이미지를 구운 직후에는 8GB로 인식합니다" />
                <ListText text="나머지 공간도 사용하려면 SD 카드를 확장해주어야 합니다" />
            </ListTextBox>
            <Typography variant="subtitle1" sx={{ color: '#3F617D', mt: 6, fontWeight: 600 }}>
                1. SD 카드 확장
            </Typography>
            <ImageBox mt={2}>
                <Box
                    component="img"
                    sx={{ width: '100%', maxWidth: 560 }}
                    className="lightbox"
                    src={routerUrlOf('/images/codingpack/booting1.png')}
                />
            </ImageBox>

            <ListTextBox sx={{ mt: 3 }}>
                <ListText text="터미널 창을 열어서 sudo raspi-config 을 입력합니다." />
            </ListTextBox>

            <ImageBox mt={8} caption="7. Advanced Options 선택">
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
            </ImageBox>
            <ListTextBox sx={{ mt: 3 }}>
                <ListText text="위와 같이 7. Advanced Options 메뉴를 선택하세요." />
                <ListText text="마우스는 사용할 수 없고, 키보드의 화살표, 탭, 엔터키만 사용할 수 있습니다" />
            </ListTextBox>

            <ImageBox sx={{ mt: 8 }} caption="A1 Expand Filesystem 선택">
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
            </ImageBox>
            <ListTextBox sx={{ mt: 3 }}>
                <ListText text="위와 같이 A1 Expand Filesystem 메뉴를 선택하세요." />
            </ListTextBox>

            <ImageBox mt={8} caption="재부팅을 물어보면 재부팅하세요">
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
            </ImageBox>
            <ListTextBox sx={{ mt: 3 }}>
                <ListText text="이제 SD 카드가 확장되었습니다. 재부팅 하세요." />
            </ListTextBox>
        </Box>
    )
}
