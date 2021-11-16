import type { NextPage } from 'next'
import HwGuide from 'src/features/hw-guide/HwGuide'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="하드웨어 가이드">
            <HwGuide />
        </MainLayout>
    )
}

export default Index
