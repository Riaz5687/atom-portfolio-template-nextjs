import React from 'react';
import Image from 'next/image'
import riazImage from '@/public/images/riaz-khan.jpg'

const NameSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
            {/*style="height: 50vh" */}
            <div className="flex flex-col items-center justify-center text-center h-screen-half">
                {/*image */}
                <Image className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                       src={riazImage}
                       alt="Your Name Here" />
                <h1 className="text-5xl sm:text-6xl lg:text-9xl">Riaz Khan</h1>
                <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">Full-Stack/ML Engineer</h2>
            </div>
        </section>
    );
};

export default NameSection;
