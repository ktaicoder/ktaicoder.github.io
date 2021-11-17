import type { NextPage } from 'next'
import CodingPackSystemReset from 'src/features/codingpack-system-reset/CodingPackSystemReset'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="코딩팩 시스템 초기화">
            <CodingPackSystemReset />
        </MainLayout>
    )
}

export default Index
