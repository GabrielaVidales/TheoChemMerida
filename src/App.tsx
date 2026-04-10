import { Route, Routes, useLocation } from "react-router"
import MainLayout from "./pages/layout"
import { routes } from "./routes/routes"
import { lazy, Suspense, useEffect } from "react"
import GalleryPage from "./pages/gallery/page"

const HomePage = lazy(() => import("./pages/page"))
const PeoplePage = lazy(() => import("./pages/people/page"))
const ProjectsPage = lazy(() => import("./pages/projects/page"))
const ProfilePage = lazy(() => import("./pages/people/profile/page"))
const ResearchPage = lazy(() => import("./pages/research/page"))
const EventsPage = lazy(() => import("./pages/events/page"))
const ContactPage = lazy(() => import("./pages/contact/page"))
const NotFoundPage = lazy(() => import("./pages/not-found/page"))

export function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [pathname])

    return (
        <Suspense fallback={null}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path={routes.people.index} element={<PeoplePage />} />
                    <Route path={routes.people.profile.url} element={<ProfilePage />} />
                    <Route path={routes.research} element={<ResearchPage />} />
                    <Route path={routes.projects} element={<ProjectsPage />} />
                    <Route path={routes.events} element={<EventsPage />} />
                    <Route path={routes.contact} element={<ContactPage />} />
                    <Route path={routes.gallery} element={<GalleryPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default App
