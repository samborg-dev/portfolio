'use client'
import Image from 'next/image';

type longcard = {
    title?: string;
    subtitle?: string;
    subsubtitle?: string;
    image?: string;
    body?: string[];
    skills?: string[];
    link?: string;
};

type LongCards = {
    lcards: longcard[];
}

export default function LongCard({ lcards }: LongCards) {

    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-20">
            <div className='grid grid-cols-1 gap-3 w-full'>
                {
                    lcards.map(item => {
                        return (
                            <div key={item.subtitle} className='menu-item w-auto text-[#F5F1ED] bg-[#1B4465] p-10 rounded-3xl transform transition sm:scale-90 hover:scale-100 border-solid border-[#F5F1ED] border-4 shadow-xl shadow-transparent hover:shadow-[#F5F1ED] mb-5'>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row items-center justify-left pb-5'>
                                        <div className='absolute pr-5 '>
                                            <Image 
                                                src={item.image ?? 'logos/vercel.svg'} 
                                                alt={item.title ?? 'logos/vercel.svg'} 
                                                title={item.title} 
                                                width={50} 
                                                height={100}
                                                draggable={false}
                                             />
                                        </div>
                                        <div className='relative flex flex-col justify-left pl-20'>
                                            <div className='font-bold text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                                                {item.title}
                                            </div>
                                            <div className='font-semibold text-sm sm:text-xs md:text-base lg:text-base xl:text-lg'>
                                                {item.subtitle}
                                            </div>
                                            <div className='font-semibold text-sm sm:text-xs md:text-base lg:text-base xl:text-lg'>
                                                {item.subsubtitle}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-wrap gap-2 pb-5'>
                                        {item.body?.map(bodys => (
                                            <span key={bodys} className=''>
                                                {bodys}
                                            </span>
                                        )) ?? '???'}
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