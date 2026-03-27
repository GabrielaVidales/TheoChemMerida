import { Route, Routes, useLocation } from "react-router"
import HomePage from "./pages/page"
import PeoplePage from "./pages/people/page"
import ProjectsPage from "./pages/projects/page"
import MainLayout from "./pages/layout"
import ProfilePage from "./pages/people/profile/page"
import ResearchPage from "./pages/research/page"
import { routes } from "./routes/routes"
import EventsPage from "./pages/events/page"
import { useEffect } from "react"

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
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path={routes.people.index} element={<PeoplePage />} />
                <Route path={routes.people.profile.url} element={<ProfilePage />} />
                <Route path={routes.research} element={<ResearchPage />} />
                <Route path={routes.projects} element={<ProjectsPage />} />
                <Route path={routes.events} element={<EventsPage />} />
                {/* <Route path={routes.contact} element={<ContactPage />} /> */}
            </Route>
        </Routes>
    )
}

export default App
