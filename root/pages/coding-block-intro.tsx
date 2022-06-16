import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CodingBlockIntro = dynamic(() => import('src/features/codingblock-intro/CodingBlockIntro'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

const Index: NextPage = () => {
    return (
        <MainLayout title="AI 코디니 소개">
            <CodingBlockIntro />
        </MainLayout>
    )
}

export default Index
