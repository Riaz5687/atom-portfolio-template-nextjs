import React from 'react';
import Image from "next/image";
import {portfolioApple, portfolioFedex, portfolioMicrosoft, portfolioStripe} from "@/public/assets/img";

const MyPortfolio = () => {
    return (
        <div className="container mx-auto py-16 md:py-20" id="portfolio">
            <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
                Check out my Portfolio
            </h2>
            <h3
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
                Heres what I have done with the past
            </h3>

            <div
                className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
            >
                <a
                    href="/"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                    <Image
                        src={portfolioApple}
                        className="w-full shadow"
                        alt="portfolio image"
                    />
                </a>
                <a
                    href="/"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                    <Image
                        src={portfolioStripe}
                        className="w-full shadow"
                        alt="portfolio image"
                    />
                </a>
                <a
                    href="/"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                    <Image
                        src={portfolioFedex}
                        className="w-full shadow"
                        alt="portfolio image"
                    />
                </a>
                <a
                    href="/"
                    className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                >
                    <Image
                        src={portfolioMicrosoft}
                        className="w-full shadow"
                        alt="portfolio image"
                    />
                </a>
            </div>
        </div>
    );
};

export default MyPortfolio;
