import React from 'react';
import Image from "next/image";
import riazImage from '@/public/images/riaz-khan.jpg'

const ImageSection = () => {
    return (
        <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
            {/*Summary (left) */}
            <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
                <div className="flex flex-col px-10 md:px-20">
                    <h3 className="text-xl font-bold">Skills</h3>
                    <br/>
                    <span className="text-lg">Management</span>
                    <span className="text-lg">Collaboration</span>
                    <span className="text-lg">Communication</span>
                    <span className="text-lg">Microsoft Office</span>
                </div>
                <div className="px-10 md:px-20">
                    <h3 className="text-xl font-bold">Summary</h3>
                    <br/>
                    <p className="w-full md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque delectus
                        consequuntur harum doloremque assumenda omnis quibusdam quia neque, adipisci iste laborum sed
                        nostrum.</p>
                </div>
                <div className="px-10 md:px-20">
                    <br/>
                    <h3 className="text-xl font-bold">Contact</h3>
                    <a className="text-xl hover:text-blue-600" href="mailto:test@nomail.com">test@email.com</a>
                    <p>675 234 4323</p>
                </div>
            </div>
            {/*image*/}
            <Image className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
                   alt={'profile image'}
                   src={riazImage}

            />
            {/*statistics (right) */}
            <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
                <div className="px-20">
                    <h4 className="text-xl font-bold">Experience</h4>
                    <br/>
                    <p className="text-6xl">+2</p>
                </div>
                <div className="px-20">
                    <h4 className="text-xl font-bold">Projects</h4>
                    <br/>
                    <p className="text-6xl">+25</p>
                </div>
                <div className="px-20">
                    <h4 className="text-xl font-bold">Clients</h4>
                    <br/>
                    <p className="text-6xl">+14</p>
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
