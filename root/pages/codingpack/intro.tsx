import type { NextPage } from 'next'
import CodingPackIntro from 'src/features/codingpack-intro/CodingPackIntro'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="코딩팩 소개 및 조립">
            <CodingPackIntro />
        </MainLayout>
    )
}

export default Index
