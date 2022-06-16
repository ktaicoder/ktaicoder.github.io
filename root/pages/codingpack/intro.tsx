import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CodingPackIntro = dynamic(() => import('src/features/codingpack-intro/CodingPackIntro'))
const MainLayout = dynamic(() => import('src/layout/main/MainLayout'))

const Index: NextPage = () => {
    return (
        <MainLayout title="KT AI Codiny Pack 소개 및 조립">
            <CodingPackIntro />
        </MainLayout>
    )
}

export default Index
