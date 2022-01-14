import { Box, Container } from '@mui/material'
import { useRef } from 'react'
import AiDesc from './component/AiDesc'
import CodingBlockDesc from './component/CodingBlockDesc'
import { rootSx } from './style'

export default function CodingBlockIntro() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <Box sx={rootSx} className="CodingBlockIntro-root">
            <Container maxWidth="md" component="div" ref={containerRef} style={{ maxWidth: 760 }}>
                <h3>KT AI 코딩블록이란?</h3>
                <section>
                    <p>
                        KT AI 코딩블록은 ‘인공지능’, ‘사물인터넷’, ‘빅데이터’ 등의 세상의 기술들을
                        <br />
                        쉽게 학습하고 구현할 수 있는 소프트웨어 코딩 교육 플랫폼입니다.
                        <br />
                        내 아이디어를 블록코딩으로 설계하고 KT AI 코딩팩을
                        <br />
                        활용해 실제 환경에서 대화하고 동작하도록 구현할 수 있습니다.
                    </p>
                </section>
                <AiDesc />
                <CodingBlockDesc />
            </Container>
        </Box>
    )
}
