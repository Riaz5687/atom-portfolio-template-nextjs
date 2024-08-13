import React from 'react';

const MyBlog = () => {
    return (
        <div className="bg-grey-50" id="blog">
            <div className="container mx-auto py-16 md:py-20">
                <h2
                    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                >
                    I also like to write
                </h2>
                <h4
                    className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                >
                    Check out my latest posts!
                </h4>
                <div
                    className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
                >
                    <a href="/post" className="shadow">
                        <div
                            // style="background-image: url(/assets/img/post-01.png)"
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 bg-[url(/assets/img/post-01.png)]"
                        >
                                  <span
                                      className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                                  ></span>
                            <span
                                className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                            >Read More</span
                            >
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8">
                                  <span className="block font-body text-lg font-semibold text-black"
                                  >How to become a frontend developer</span
                                  >
                            <span className="block pt-2 font-body text-grey-20"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
                            >
                        </div>
                    </a>
                    <a href="/post" className="shadow">
                        <div
                            // style="background-image: url(/assets/img/post-02.png)"
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 bg-[url(/assets/img/post-02.png)]"
                        >
          <span
              className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
                            <span
                                className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                            >Read More</span
                            >
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black"
          >My personal productivity system</span
          >
                            <span className="block pt-2 font-body text-grey-20"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
                            >
                        </div>
                    </a>
                    <a href="/post" className="shadow">
                        <div
                            // style="background-image: url(/assets/img/post-03.png)"
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 bg-[url(/assets/img/post-03.png)]"
                        >
          <span
              className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
          ></span>
                            <span
                                className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                            >Read More</span
                            >
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8">
          <span className="block font-body text-lg font-semibold text-black"
          >My year in review 2020</span
          >
                            <span className="block pt-2 font-body text-grey-20"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
                            >
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyBlog;
