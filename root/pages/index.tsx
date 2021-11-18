import type { NextPage } from 'next'
import Home from 'src/features/home/Home'
import MainLayout from 'src/layout/main/MainLayout'

const Index: NextPage = () => {
    return (
        <MainLayout title="Home">
            <Home />
        </MainLayout>
    )
}

export default Index