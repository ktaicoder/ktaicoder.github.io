import { Box, SxProps } from '@mui/material'
import MdxImageView from 'src/components/mdx-image-view/MdxImageView'
import SimpleVideoPlayer from 'src/components/simple-video-player/SimpleVideoPlayer'

type Props = {
    sx?: SxProps
}
export default function CodingBlockDesc(props: Props) {
    const { sx } = props
    return (
        <Box className="CodingBlockDesc-root" sx={[...(Array.isArray(sx) ? sx : [sx ?? false])]}>
            <h3>KT AI 코디니으로 프로그래밍해 보자.</h3>
            <section>
                <h5>프로그램을 만들려면 무엇이 필요할까요?</h5>
                <p>
                    컴퓨터에게 내가 원하는 일을 시키리면 내 명령을 컴퓨터가 알아들을 수 있도록 해 주어야 합니다.
                    컴퓨터는 사람의 말이나 글을 알아들을 수 없어서 그냥 명령을 내리면 컴퓨터는 내가 원하는 일을 할 수
                    없습니다. 그래서{' '}
                    <em>컴퓨터가 알아들을 수 있는 언어로 컴퓨터에게 일을 시키기 위해 만드는 것을 프로그램</em>이라고
                    합니다.
                </p>
                <p>
                    프로그램을 만들기 위해서는 <em>컴퓨터가 알아드는 언어인 프로그래밍 언어</em>가 필요합니다. 컴퓨터가
                    명령을 이해할 수 있도록 <em>프로그래밍 언어를 사용하여 프로그램을 만드는 것을 코딩</em>이라고
                    합니다.
                </p>
                <p>
                    KT AI 코디니도 프로그래밍 언어의 한 종류로 <em>블록형 프로그래밍 언어</em>입니다.
                </p>
                <Box className="CodingBlockIntro-imageBox">
                    <MdxImageView src="/images/intro/codingblock1.png" transparentBg />
                </Box>
                <SimpleVideoPlayer videoUrl="https://www.youtube.com/watch?v=WtujHpeIzX4" />
            </section>
        </Box>
    )
}
