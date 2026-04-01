import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import TopButton from '@/components/ui/go-to-top-button'
import { Outlet } from 'react-router'

function MainLayout() {
    return (
        <>
            <Header 
            // variant='fixed'
            //  enableScroll 
            //  scrollThreshold={100}
             />
            <main>
                <Outlet />
            </main>
            <Footer />
            <TopButton />
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
            <TopButton />
        </>
    )
}