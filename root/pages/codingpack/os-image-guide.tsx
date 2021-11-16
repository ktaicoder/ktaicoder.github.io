import type { NextPage } from 'next'
import CodingPackOsImageGuide from 'src/features/codingpack-os-image-guide/CodingPackOsImageGuide'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="코딩팩 OS 제작 가이드">
            <CodingPackOsImageGuide />
        </MainLayout>
    )
}

export default Index