import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CodingPackOsImageGuide = dynamic(() => import('src/features/codingpack-os-image-guide/CodingPackOsImageGuide'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

const Index: NextPage = () => {
    return (
        <MainLayout title="코딩팩 OS 이미지 굽기">
            <CodingPackOsImageGuide />
        </MainLayout>
    )
}

export default Index
