import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import StepCircle from './StepCircle'
import StepDivider from './StepDivider'

export default function IntroStepPart() {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: 640,
                ...(mdDown && {
                    flexDirection: 'column',
                }),
                ...(!mdDown && {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                }),
            }}
        >
            <StepCircle
                title="첫번째"
                horizontal={mdDown}
                subtitle="OS 이미지 다운로드"
                color="#5DA7B4"
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step1.svg')}
            />

            {!mdDown && <StepDivider color1="#5DA7B4" color2="#228AA5" height={130} />}

            <StepCircle
                title="두번째"
                horizontal={mdDown}
                subtitle="에처(Etcher) 프로그램 다운로드"
                color="#228AA5"
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step2.svg')}
            />
            {!mdDown && <StepDivider color1="#228AA5" color2="#3F617D" height={130} />}
            <StepCircle
                title="세번째"
                subtitle="SD카드에 OS 이미지 굽기"
                color="#3F617D"
                horizontal={mdDown}
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step3.svg')}
            />
        </Box>
    )
}
