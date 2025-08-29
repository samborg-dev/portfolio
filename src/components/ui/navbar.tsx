'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const path = usePathname();

    const link = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Projects',
            path: '/projects'
        },
        {
            name: 'Experience',
            path: '/experience'
        },
        {
            name: 'Skills',
            path: '/skills'
        },
    ];

    return (
        <div suppressHydrationWarning className="theme-container flex justify-center w-auto">
            <div className='navbar flex justify-center py-4 px-4 items-center h-16 bg-card fixed top-0 max-w-6xl mx-auto z-50 rounded-xl border-solid border-4 border-accent mt-10'>
                <div className='flex w-auto h-auto bg-transparent'>
                    <ul className='flex flex-row items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8'>
                        {link.map(item => {
                            const isActive = path === item.path;
                            return (
                                <li key={item.path} className='menu-item'>
                                    <div className={`${isActive ? "transform transition scale-110 font-bold" : ""} text-card-foreground text-sm sm:text-base md:text-lg lg:text-xl transform transition hover:scale-110`}>
                                        {item.name === 'LinkedIn' ? (
                                            <Link href={item.path} target="_blank" rel="noopener noreferrer">
                                                <Image src="/logos/Linked-White.png" alt="LinkedIn" width={30} height={30} className="inline-block align-middle" />
                                            </Link>
                                        ) : item.name === 'Github' ? (
                                            <Link href={item.path} target="_blank" rel="noopener noreferrer">
                                                <Image src="logos/github-mark-white.svg" alt="Github" width={30} height={30} className="inline-block align-middle" />
                                            </Link>
                                        ) : (
                                            <span className="text-card-foreground bg-transparent" style={{ fontFamily: 'Good Matcha' }}>
                                                <Link href={item.path}>
                                                    {item.name}
                                                </Link>
                                            </span>
                                        )}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;