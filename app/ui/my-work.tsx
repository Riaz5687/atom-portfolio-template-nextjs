import React from 'react';
import Image from "next/image";
import {logoFedex, logoMicrosoft, logoSpotify} from "@/public/assets/img";

const MyWork = () => {
    return (
        <div className="container mx-auto py-16 md:py-20" id="work">
            <h2
                className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
                My work experience
            </h2>
            <h3
                className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
                Heres what I did before freelancing
            </h3>

            <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                    <div className="md:w-2/5">
                        <div className="flex justify-center md:justify-start">
                                  <span className="shrink-0">
                                    <Image
                                        src={logoSpotify}
                                        className="h-auto w-32"
                                        alt="company logo"
                                    />
                                  </span>
                            <div className="relative ml-3 hidden w-full md:block">
                                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="relative flex md:pl-18">
                            <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                            <div className="mt-1 flex">
                                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                <div className="md:-mt-1 md:pl-8">
                                    <span className="block font-body font-bold text-grey-40">Apr 2015 - Mar 2018</span>
                                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Frontend Developer</span>
                                    <div className="pt-2">
                                                <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                  venenatis enim.
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                    <div className="md:w-2/5">
                        <div className="flex justify-center md:justify-start">
                                  <span className="shrink-0">
                                    <Image
                                        src={logoMicrosoft}
                                        className="h-auto w-32"
                                        alt="company logo"
                                    />
                                  </span>
                            <div className="relative ml-3 hidden w-full md:block">
                                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="relative flex md:pl-18">
                            <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                            <div className="mt-1 flex">
                                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                <div className="md:-mt-1 md:pl-8">
                                    <span className="block font-body font-bold text-grey-40">Mar 2018 - September 2019</span>
                                    <span
                                        className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                                    >Software Engineer</span
                                    >
                                    <div className="pt-2">
                                                <span className="block font-body text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                  venenatis enim.
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                    <div className="md:w-2/5">
                        <div className="flex justify-center md:justify-start">
                                  <span className="shrink-0">
                                    <Image
                                        src={logoFedex}
                                        className="h-auto w-32"
                                        alt="company logo"
                                    />
                                  </span>
                            <div className="relative ml-3 hidden w-full md:block">
                                        <span
                                            className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                                        ></span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="relative flex md:pl-18">
                                  <span
                                      className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                                  ></span>

                            <div className="mt-1 flex">
                                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                <div className="md:-mt-1 md:pl-8">
                                          <span className="block font-body font-bold text-grey-40"
                                          >October 2019 - Feb 2021</span
                                          >
                                    <span
                                        className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                                    >DevOps Engineer</span
                                    >
                                    <div className="pt-2">
                                                <span className="block font-body text-black"
                                                >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                  Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac
                                                  venenatis enim.</span
                                                >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;
