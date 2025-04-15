'use client'
import Image from 'next/image';

type nicard = {
    title?: string;
    subtitle?: string;
    subsubtitle?: string;
    body?: string;
    skills?: string[];
    snames?: string[];
    link?: string;
};

type NICards = {
    nicards: nicard[];
}

export default function NICard({ nicards }: NICards) {
    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-20">
            <div className="grid grid-cols-1 gap-3 w-full">
                {nicards.map((item) => {
                    return (
                        <div
                            key={item.title}
                            className="menu-item w-auto text-[#F5F1ED] bg-[#1B4465] p-10 rounded-3xl transform transition sm:scale-90 hover:scale-100 border-solid border-[#F5F1ED] border-4 shadow-xl shadow-transparent hover:shadow-[#F5F1ED] mb-5"
                        >
                            <div className="flex flex-col">
                                <div className="relative flex flex-col justify-left">
                                    <div className="font-bold text-md sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                        {item.title}
                                    </div>
                                    <div className="font-semibold text-sm sm:text-xs md:text-base lg:text-base xl:text-lg">
                                        {item.subtitle}
                                    </div>
                                    <div className="font-semibold text-sm sm:text-xs md:text-base lg:text-base xl:text-lg">
                                        {item.subsubtitle}
                                    </div>
                                </div>

                                <div className="pb-5">{item.body}</div>

                                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-9 gap-2"                                >
                                    {item.skills?.map((skill, index) => (
                                        <span
                                            key={skill}
                                            className="bg-[#13293D] p-2 rounded-md transform transition sm:scale-90 hover:scale-100 shadow-lg shadow-transparent hover:shadow-[#F5F1ED] flex items-center justify-center"
                                        >
                                            <Image
                                                src={skill ?? 'logos/vercel.svg'}
                                                alt={item.snames?.[index] ?? '???'}
                                                title={item.snames?.[index] ?? ''}
                                                width={50}
                                                height={50}
                                                className="items-center h-12"
                                            />
                                        </span>
                                    )) ?? '???'}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}