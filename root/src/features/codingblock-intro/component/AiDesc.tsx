import { Box, SxProps } from '@mui/material'
import MdxImageView from 'src/components/mdx-image-view/MdxImageView'

type Props = {
    sx?: SxProps
}

export default function AiDesc(props: Props) {
    const { sx } = props

    return (
        <Box sx={[...(Array.isArray(sx) ? sx : [sx ?? false])]} className="AiDesc-root">
            <h3>인공지능이란?</h3>
            <section>
                <p>
                    <em>인공지능(Artificial Intelligence)</em>이란? 기계가{' '}
                    <em>사람처럼 생각하고 학습하여 판단하는 능력을 가질 수 있도록 컴퓨터 프로그램을 실현한 기술</em>을
                    말합니다.
                </p>
                <p>
                    인공지능은 우리의 삶을 더욱 편리하고 유익하게 해 줍니다. 예를 들어 인공지능의 자동 번역 기술은
                    우리말을 외국어로 통역해 주고 외국어로 된 글을 우리말로 바꾸어주기도 합니다.
                </p>
                <p>
                    사물인식 기능이 탑재된 인공지능은 카메라를 통해 촬영된 사진을 분석한 후, 인터넷에서 정보를 검색하여
                    그것이 무엇인지 알려주기도 하지요. 요즘 많은 가정에서 사용하는 AI 스피커는 사람이 말을 걸면 대답하고
                    사람의 지시에 따라 TV를 켜거나 노래를 들려 주기도 합니다. 사람이 운전하지 않아도 스스로 목적지를
                    찾아 가는 미래형 자율 주행 자동차에도 인공지능 기술이 적용됩니다.
                </p>
            </section>
            <Box className="CodingBlockIntro-imageBox">
                <MdxImageView src="/images/intro/ai1.png" transparentBg caption="출처: 와이즈 교육 자료" />
            </Box>
        </Box>
    )
}
