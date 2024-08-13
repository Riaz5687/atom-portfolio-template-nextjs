import React from "react";
import {AboutMe, Contact, HeroSection, MyBlog, MyClients, MyPortfolio, MyWork, Newsletter, Statistics} from "@/app/ui";
import HereIAmGoodAt from "@/app/ui/my-services";

export default function Home() {
    return (
        <div>
            <HeroSection/>

            <AboutMe/>

            <HereIAmGoodAt/>

            <MyPortfolio/>

            <MyClients/>

            <MyWork/>

            <Statistics/>

            <MyBlog/>

            <Contact/>

            <div
                className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96 bg-[url(/assets/img/map.png)]"></div>

            <Newsletter/>
        </div>
    );
}
