import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <>
            <Header variant='fixed' enableScroll scrollThreshold={100} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout


export function AltLayout() {
     return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}