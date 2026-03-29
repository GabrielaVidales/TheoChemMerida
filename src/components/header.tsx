import theochemlogo from '@/assets/TheoChemMeridaLogo.png'
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { routes } from '@/routes/routes';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverHeader, PopoverTrigger, } from "@/components/ui/popover"
import { Item, ItemContent, ItemTitle, } from "@/components/ui/item"


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
        label: 'Publications',
        url: routes.research
    },
    {
        label: 'Software',
        url: routes.projects
    },
    {
        label: 'Events',
        url: routes.events
    },
    // {
    //     label: 'Contact Us',
    //     url: '/contact'
    // },
]


type HeaderProps = {
    enableScroll?: boolean,
    scrollThreshold?: number,
    variant?: 'fixed' | 'sticky'
}

export const Header = ({
    enableScroll = false,
    scrollThreshold = 100,
    variant = 'sticky'
}: HeaderProps) => {
    const scroll = useScroll(scrollThreshold)

    return (
        <header className={cn(
            'h-24 w-full shadow-lg z-50 fixed top-0',
            'transition-all duration-300',
            !enableScroll || scroll ? 'bg-white' : 'bg-white/5',
            variant,
        )}>
            <div className='max-w-6xl h-24 flex justify-between items-center gap-3 mx-auto p-4'>
                <div className="flex justify-center absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
                    <Link to={routes.index}>
                        <img
                            src={theochemlogo}
                            alt="TheoChemMerida"
                            className={cn(
                                'max-h-15 transition-all duration-300',
                                !enableScroll || scroll ? 'invert' : ''
                            )}
                        />
                    </Link>
                </div>

                <nav className={cn(
                    "hidden lg:flex items-center gap-6 text-lg",
                    !enableScroll || scroll ? 'text-black' : 'text-white',
                )}>
                    {navLinks.map((link, index) => (
                        <NavLink to={link.url} key={index} className='group text-xl font-medium flex flex-col gap-1 cursor-pointer'>
                            {({ isActive }) => (
                                <>
                                    <span className={cn(
                                        isActive ?
                                            'text-indigo-400' :
                                            'group-hover:text-indigo-400 transition-colors'
                                    )}>
                                        {link.label}
                                    </span>
                                    <div className={cn(
                                        'h-1 rounded-full mt-auto bg-indigo-500 origin-center scale-x-0',
                                        isActive ?
                                            'scale-x-100' :
                                            'group-hover:scale-x-100 transition-transform',
                                    )} />
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className={cn(
                    'lg:hidden ml-auto'
                )}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button size='icon-lg' variant='ghost' className={cn(
                                !enableScroll || scroll ?
                                    'text-black/80 hover:text-black/50 active:text-black' :
                                    'text-white/80 hover:text-white/50 active:text-white',

                                !enableScroll || scroll ?
                                    'bg-black/10 hover:bg-black/5 active:bg-black/15' :
                                    'bg-background/20 hover:bg-background/10 active:bg-background/25'
                            )}>
                                <Menu className='stroke-3' />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='p-0 max-w-50'>
                            <PopoverHeader>
                                {navLinks.map((link, index) =>
                                    <Item key={index} asChild variant='muted' className='py-3 px-5'>
                                        <Link
                                            to={link.url}
                                            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}
                                        >
                                            <ItemContent>
                                                <ItemTitle className='text-base'>{link.label}</ItemTitle>
                                            </ItemContent>
                                        </Link>
                                    </Item>
                                )}
                            </PopoverHeader>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header >
    )
}