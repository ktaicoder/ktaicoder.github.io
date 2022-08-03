import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { routerUrlOf } from 'src/lib/urls'
import StepCircle from './StepCircle'
import StepDivider from './StepDivider'

export default function IntroStepPart() {
    const theme = useTheme()
    const smOrDown = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: 640,
                ...(smOrDown && {
                    flexDirection: 'column',
                }),
                ...(!smOrDown && {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                }),
            }}
        >
            <StepCircle
                title="첫번째"
                horizontal={smOrDown}
                subtitle="OS 이미지 다운로드"
                color="#5DA7B4"
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step1.svg')}
            />

            {!smOrDown && <StepDivider color1="#5DA7B4" color2="#228AA5" height={130} />}

            <StepCircle
                title="두번째"
                horizontal={smOrDown}
                subtitle="Imager 프로그램 다운로드"
                color="#228AA5"
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step2.svg')}
            />
            {!smOrDown && <StepDivider color1="#228AA5" color2="#3F617D" height={130} />}
            <StepCircle
                title="세번째"
                subtitle="SD카드에 OS 이미지 굽기"
                color="#3F617D"
                horizontal={smOrDown}
                size={130}
                imageSrc={routerUrlOf('/images/codingpack/step3.svg')}
            />
        </Box>
    )
}
