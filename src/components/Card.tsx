'use client'
import Link from 'next/link';
import Image from 'next/image';

type card = {
    title: string;
    subtitle: string;
    image: string;
    body: string;
    skills: string[];
    link?: string;
};

const cards: card[] = [
    {
        title: 'yo mama.net', 
        subtitle: 'butt',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala',
        skills: ['penis', 'balls', 'dylan vidal', 'kmodo'],
        link: 'https://www.dvidal.me/'
    },

    {
        title: 'yo mama.nett', 
        subtitle: 'buttt',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala',
        skills: ['penis', 'balls', 'dylan vidal', 'kmodo'],
        link: 'https://www.dvidal.me/'
    },

    {
        title: 'yo mama.nettt', 
        subtitle: 'butttt',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala',
        skills: ['penis', 'balls', 'dylan vidal', 'kmodo'],
        link: 'https://www.dvidal.me/'
    },

    {
        title: 'yo mama.netttt', 
        subtitle: 'buttttt',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala',
        skills: ['penis', 'balls', 'dylan vidal', 'kmodo'],
        link: 'https://www.dvidal.me/'
    },
];

const Card = () => {

    return(
        <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full'>
            {
                cards.map(item => {
                    return (
                        <div key={item.title} className='menu-item m-1 sm:m-2 md:m-3 lg:m-4 xl:m-5 text-[#F5F1ED] bg-[#1B4465] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-10 rounded-3xl transform transition hover:scale-110'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center justify-left'>
                                        <div className='pr-5'><Image src={item.image} alt={item.title} title={item.title} width={30} height={30}></Image></div>
                                        <div className='flex flex-col justify-left'>
                                            <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                                                {item.title}
                                            </div> 
                                            <div>{item.subtitle}</div> 
                                        </div>
                                    </div>
                                    
                                    <div>{item.body}</div> <div>{item.skills}</div>
                                    <Link href={item.link} target='_blank' rel="noopener noreferrer">{item.link}</Link>
                                </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Card;