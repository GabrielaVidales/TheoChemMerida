import theochemlogo from '@/assets/theochemlogo.jpg'
import { cn } from '@/lib/utils';
import { routes } from '@/routes/routes';
import { Link, NavLink } from 'react-router-dom';

const navLinks: { label: string, url: string }[] = [
    {
        label: 'Home',
        url: routes.index
    },
    {
        label: 'People',
        url: routes.people.index
    },
    {
        label: 'Research',
        url: routes.research
    },
    {
        label: 'Projects',
        url: routes.projects
    },
    {
        label: 'Events',
        url: routes.events
    },
    // {
    //     label: 'Contact',
    //     url: routes.contact
    // },
]

export const Header = () => {
    return (
        <header className='h-24 shadow-lg z-50 sticky top-0 bg-white'>
            <div className='max-w-6xl h-24 flex justify-between items-center gap-3 mx-auto p-4'>
                <div className="flex justify-center absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
                    <Link to={routes.index}>
                        <img
                            src={theochemlogo}
                            alt="TheoChemMerida"
                            className='max-h-15'
                        />
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-6 text-lg">
                    {navLinks.map((link, index) => (
                        <NavLink to={link.url} key={index} className='group text-xl font-medium flex flex-col gap-1 cursor-pointer'>
                            {({ isActive }) => (
                                <>
                                    <span className={cn(
                                        isActive ?
                                            'text-[#6854ff]' :
                                            'group-hover:text-[#6854ff] transition-colors duration-300'
                                    )}>
                                        {link.label}
                                    </span>
                                    <div className={cn(
                                        'h-1 rounded-full mt-auto bg-[#6854ff] origin-center scale-x-0',
                                        isActive ?
                                            'scale-x-100' :
                                            'group-hover:scale-x-100 transition-transform duration-300',
                                    )} />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}