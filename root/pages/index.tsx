import type { NextPage } from 'next'
import Home from 'src/features/home/Home'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="AI 코딩블록 개발자 가이드">
            <Home />
        </MainLayout>
    )
}

export default Index
