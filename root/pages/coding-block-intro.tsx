import type { NextPage } from 'next'
import CodingBlockIntro from 'src/features/codingblock-intro/CodingBlockIntro'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="AI 코딩 블록 소개">
            <CodingBlockIntro />
        </MainLayout>
    )
}

export default Index
