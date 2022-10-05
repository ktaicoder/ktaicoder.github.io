import { Box, Button, SxProps, Typography } from '@mui/material'
import clsx from 'clsx'
import { arraySx } from 'src/lib/sx-props'
import LaunchIcon from '@mui/icons-material/Launch'
import { rootSx } from './style'

type Props = {
    sx?: SxProps
    className?: string
}
export default function PyGinsideLimit(props: Props) {
    const { sx, className } = props

    return (
        <Box className={clsx('PyGinsideLimit-root', className)} sx={[rootSx, ...arraySx(sx)]}>
            <Typography variant="body2" ml={3} color="#999" pb={1}>
                예제의 한계와 그 이유
            </Typography>
            <Box component="ul" className="PyGinsideLimit-list">
                <li>이 예제는 실제 인공지능 스피커보다는 기능이 부족합니다.</li>
                <li>
                    예를 들어서, 사용자가 <em>오늘 날씨가 어때?</em>라고 질문한 경우 인공지능 스피커는 어떤 지역의
                    날씨를 알려줄 수 있을까요? 아무 지역의 날씨를 알려줄 수는 없으므로, 인공지능 스피커는{' '}
                    <em>어떤 지역의 날씨를 알려드릴까요?</em>라고 <b>재질문</b>을 해야 합니다.
                </li>
                <li>
                    하지만 재질문 기능을 추가하면, 예제 소스코드가 <b>복잡</b>해져서,{' '}
                    <b>학습 목적으로는 적합하지 않습니다.</b>
                </li>
                <li>
                    보다 완성도가 높은 인공지능 스피커는 아래 링크에서 확인해볼 수 있습니다.
                    <Box>
                        <Button href="https://aicodiny.com/intro" target="_blank" size="large" endIcon={<LaunchIcon />}>
                            AI 코디니란?
                        </Button>
                    </Box>
                </li>
                <li>이런 한계점이 있음을 이해하는 것도 프로그래밍의 이해에 도움이 되리라 생각됩니다.</li>
            </Box>
        </Box>
    )
}
