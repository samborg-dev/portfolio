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
        title: 'Kmodo', 
        subtitle: 'January 2025 - Present',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala ijij ijijoiudsifn ijsiudfniuwejf ijosenfbn ijsoidjfonion slkhgseufghbskehrgouayhergi',
        skills: ['k', 'm', 'o', 'd', 'o '],
        link: 'https://www.dvidal.me/'
    },

    {
        title: 'Spark-a-Hack', 
        subtitle: 'KnightHacks VII 2024',
        image: '/logos/sparkahack.png',
        body: 'lalalalalalalalala',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'tRPC', 'Gemini API', ],
        link: 'https://www.dvidal.me/'
    },

    {
        title: 'Night of Knights', 
        subtitle: 'May 2023 – May 2024',
        image: 'logos/github-mark.svg',
        body: 'lalalalalalalalala',
        skills: ['C#', 'Unity'],
        link: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights'
    },

];

const Card = () => {

    return(
        <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full'>
            {
                cards.map(item => {
                    return (
                        <div key={item.title} className='menu-item w-auto text-[#F5F1ED] bg-[#1B4465] p-10 rounded-3xl transform transition sm:scale-90 hover:scale-100 border-solid border-[#F5F1ED] border-4 shadow-xl shadow-transparent hover:shadow-[#F5F1ED]'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center justify-left pb-5'>
                                        <div className='pr-5'><Image src={item.image} alt={item.title} title={item.title} width={50} height={50} /></div>
                                        <div className='flex flex-col justify-left'>
                                        <Link href={item.link ?? '#'} target='_blank' rel="noopener noreferrer">
                                            <div className='font-bold text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:underline transform transition hover:scale-110'>
                                                {item.title}
                                            </div> 
                                        </Link>
                                            <div className='font-semibold text-sm sm:text-xs md:text-base lg:text-base xl:text-lg'>
                                                {item.subtitle}
                                            </div> 
                                        </div>
                                    </div>
                                    
                                    <div className='pb-5'>{item.body}</div> 

                                    <div className='flex flex-wrap gap-2'>
                                        {item.skills.map(skill => (
                                            <span key={skill} className='bg-[#13293D] p-2 rounded-md'>{skill}</span>
                                        ))}
                                    </div>
                                    
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