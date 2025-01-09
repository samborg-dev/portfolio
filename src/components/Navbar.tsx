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
        {
            name: 'Github',
            path: 'https://github.com/samborg-dev'
        },
        {
            name: 'LinkedIn',
            path: 'https://linkedin.com/in/samuel-xavier-borges/'
        }
    ];

    return (
        <div className='navbar flex justify-between py-6 px-4 items-center h-16 bg-transparent fixed top-0 left-0 w-full z-50'>
            <div className='block text-[#F5F1ED]'>
                logo
            </div>
            <div className='flex static w-auto h-auto bg-transparent'>
                <ul className='flex flex-row static bg-transparent items-center p-0 h-full overflow-y-auto shadow-none'>
                    {
                        link.map(item => {
                            const isActive = path === item.path;
                            return (
                                <li key={item.path} className='menu-item m-1 sm:m-2 md:m-3 lg:m-4 xl:m-5'>
                                    <div className={`${isActive ? "transform transition scale-110 font-bold" : ""} text-[#F5F1ED] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transform transition hover:scale-110`}>
                                        {item.name === 'LinkedIn' ? (
                                            <Link href={item.path} target="_blank" rel="noopener noreferrer">
                                                <Image src="/logos/Linked-White.png" alt="LinkedIn" width={30} height={30} className="inline-block align-middle" />
                                            </Link>
                                        ) : item.name === 'Github' ? (
                                            <Link href={item.path} target="_blank" rel="noopener noreferrer">
                                                <Image src="logos/github-mark-white.svg" alt="Github" width={30} height={30} className="inline-block align-middle" />
                                            </Link>
                                        ) : (
                                            <span className="text-[#F5F1ED] bg-transparent w-auto text-left">
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
    )
}

export default Navbar;