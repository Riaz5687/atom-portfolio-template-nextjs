import React from 'react';
import Image from "next/image";
import {logoAmazon, logoApple, logoCocaCola, logoNetflix, logoStripe} from "@/public/assets/img";

const MyClients = () => {
    return (
        <div className="bg-grey-50" id="clients">
            <div className="container mx-auto py-16 md:py-20">
                <div className="mx-auto w-full sm:w-3/4 lg:w-full">
                    <h2
                        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                    >
                        My latest clients
                    </h2>
                    <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                                <span className="m-8 block">
                                  <Image
                                      src={logoCocaCola}
                                      alt="client logo"
                                      className="mx-auto block h-12 w-auto"
                                  />
                                </span>
                        <span className="m-8 block">
                                  <Image
                                      src={logoApple}
                                      alt="client logo"
                                      className="mx-auto block h-12 w-auto"
                                  />
                                </span>

                        <span className="m-8 block">
                                  <Image
                                      src={logoNetflix}
                                      alt="client logo"
                                      className="mx-auto block h-12 w-auto"
                                  />
                                </span>

                        <span className="m-8 block">
                                  <Image
                                      src={logoAmazon}
                                      alt="client logo"
                                      className="mx-auto block h-12 w-auto"
                                  />
                                </span>

                        <span className="m-8 block">
                                  <Image
                                      src={logoStripe}
                                      alt="client logo"
                                      className="mx-auto block h-12 w-auto"
                                  />
                                </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClients;
