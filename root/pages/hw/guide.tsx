import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const HwGuide = dynamic(() => import('src/features/hw-guide/HwGuide'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

const Index: NextPage = () => {
    return (
        <MainLayout title="하드웨어 가이드">
            <HwGuide />
        </MainLayout>
    )
}

export default Index
