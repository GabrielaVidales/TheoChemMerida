import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import TopButton from '@/components/ui/go-to-top-button'
import { Outlet, useLocation } from 'react-router'

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <TopButton />
        </>
    )
}

export default MainLayout
