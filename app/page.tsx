import Image from "next/image";
import NameSection from "@/app/ui/name-section";
import ImageSection from "@/app/ui/image-section";
import Resume from "@/app/ui/resume";

export default function Home() {
  return (
      <div>
        {/*Name section */}
        <NameSection />
        {/*/Name Section */}

        {/*image section */}
        <ImageSection />
        {/*/image section*/}

        <hr className="border-gray-400 mx-44" />

        {/*Resume */}
        <Resume />
        <hr className="border-gray-400 mx-44" />
        {/*Resume */}

        <section className="px-20 mt-10">
          <h4 className="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
          <div className="grid grid-cols-1 md:grid-cols-6 my-10">
            <div className="flex flex-col col-span-2 mb-4 md:mb-0">
              <h5 className="text-xl md:text-2xl  font-bold">B.S. Computer Science</h5>
              <h6 className="text-lg font-bold">Harward University</h6>
              <p>Jan 2015 - present</p>
            </div>
            <div className="flex flex-col col-span-4 ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eveniet deleniti tempore veritatis
                adipisci accusantium voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id cum minus sit
                laudantium ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi non incidunt
                voluptates molestiae delectus nulla quisquam aperiam voluptas tempora distinctio! Ipsa cupiditate
                harum voluptates praesentium. Suscipit itaque officiis odio ut!</p>
            </div>
          </div>
        </section>
      </div>
  );
}
