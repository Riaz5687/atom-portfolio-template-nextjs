import React from "react";
import {
    blogAuthor, iconAward,
    iconClose,
    iconContentBlack,
    iconContentWhite,
    iconDesignBlack,
    iconDesignWhite,
    iconDevelopmentBlack,
    iconDevelopmentWhite,
    iconEmailBlack,
    iconEmailWhite,
    iconGraphicsBlack,
    iconGraphicsWhite, iconHappy,
    iconMobileBlack,
    iconMobileWhite, iconProject, iconPuzzle,
    logo,
    logoAmazon,
    logoApple,
    logoCocaCola, logoFedex, logoMicrosoft,
    logoNetflix, logoSpotify, logoStripe,
    portfolioApple,
    portfolioFedex,
    portfolioMicrosoft,
    portfolioStripe
} from '@/public/assets/img'
import Image from "next/image";
import {
    Contact,
    Footer, Header,
    HeroSection,
    MyBlog,
    MyClients,
    MyPortfolio,
    MyWork,
    Newsletter, SideDrawer,
    Statistics,
    AboutMe
} from "@/app/ui";
import HereIAmGoodAt from "@/app/ui/my-services";

export default function Home() {
    return (
        <div className={'bg-white'}>
            <Header />

            <SideDrawer />


            <div>
                <HeroSection />

                <AboutMe />

                <HereIAmGoodAt />

                <MyPortfolio />

                <MyClients />

                <MyWork />

                <Statistics />

                <MyBlog />

                <Contact />

                <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96 bg-[url(/assets/img/map.png)]"></div>

                <Newsletter />
            </div>

            <Footer />


        </div>


    );
}
