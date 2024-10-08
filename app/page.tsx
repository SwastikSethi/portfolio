import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-full flex flex-col ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-11">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl"> Aspiring Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-blue-700">Swastik Sethi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
              href={"https://drive.google.com/drive/u/1/folders/1cwBFLDYKVIM6Y5yczbRJIdk4I2KReTOk"}
                // variant="outline"
                // size="lg"
                className="uppercase flex items-center gap-2 w-full h-9 border border-blue-700 rounded-full  justify-center text-blue-700 text-base hover:bg-blue-700 hover:text-white hover:transition-all duration-500"
                
              >
                <div>Download Cv</div>
                <FiDownload className="text-xl " />
              </Link>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 flex-row"
                  iconStyles="w-9 h-9 border border-blue-700 rounded-full flex justify-center items-center text-blue-700 text-base hover:bg-blue-700 hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats  />
    </div>
  );
};

export default Home;
