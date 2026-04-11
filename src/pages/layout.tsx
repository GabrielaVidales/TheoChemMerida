import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import TopButton from '@/components/ui/go-to-top-button'
import { NavLink, Outlet, useLocation } from 'react-router'
import { Link } from "react-router-dom";
import { people, slugify } from "@/data/people"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <BreadCrumb />
                <Outlet />
            </main>
            <Footer />
            <TopButton />
        </>
    )
}

export default MainLayout


function BreadCrumb() {
    const { pathname } = useLocation()
    const segments = pathname.split("/").filter(Boolean);


    return (
        <Breadcrumb className='sticky top-24 z-10 bg-main p-2 px-5 shadow-md shadow-accent-foreground/20'>
            <BreadcrumbList className='text-neutral-100 text-sm md:text-base tracking-wide max-w-5xl mx-auto'>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <NavLink to="/" className='hover:text-white'>
                            Home
                        </NavLink>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const isLast = index === segments.length - 1;
                    const href = `/${segments.slice(0, index + 1).join("/")}`;

                    let displayName = segment.replace(/-/g, " ");

                    if (segments[index - 1] === "people") {
                        const person = people.find(p =>
                            p.name.toLowerCase().replace(/\s+/g, '-') === segment ||
                            slugify(p.name) === segment
                        );
                        if (person) displayName = person.name;
                    }

                    return (
                        <div key={href} className="flex items-center gap-2">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="capitalize text-white font-semibold">{displayName}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link to={href} className="capitalize hover:text-white">{displayName}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}