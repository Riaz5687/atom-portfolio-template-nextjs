import React from 'react';

const Footer = () => {
    return (
        <div className="bg-primary">
            <div className="container mx-auto flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                    © Copyright 2022. All right reserved, ATOM.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <a href="/">
                        <i
                            className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                        ></i>
                    </a>
                    <a href="/" className="pl-4">
                        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                        <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                        <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
