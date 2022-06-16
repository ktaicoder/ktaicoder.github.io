import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('src/features/home/Home'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

const Index: NextPage = () => {
    return (
        <MainLayout title="AI 코디니 사용자 가이드">
            <Home />
        </MainLayout>
    )
}

export default Index
