"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Backend",
    title: "VibeTube",
    description: "Created the backend for VibeTube, a full-stack project integrating YouTube and Twitter features. Implemented user, video, tweet, subscription, playlist, like, and comment management.",
    stack: [
      { name: "NodeJs" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/SwastikSethi/VibeTube",
  },
  {
    num: "02",
    category: "frontend",
    title: "Coogle Meet",
    description: "Developed a feature-rich video calling application, implementing essential functionalities like account creation, meeting initiation, scheduling, and secure real-time communication.",
    stack: [{ name: "Next JS" }, { name: "TypeScript" },{ name: "Tailwind CSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://coogle-meet.vercel.app/",
    github: "https://github.com/SwastikSethi/Google-Meet-Clone",
  },
  {
    num: "03",
    category: "frontend",
    title: "Youtube Clone",
    description: " Developed a fully responsive YouTube clone with the capability to play YouTube videos seamlessly. Incorporated features such as search functionality, related videos, and categorized content.",
    stack: [{ name: "React JS" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://youtube-clone-beta-swart.vercel.app/",
    github: "https://github.com/SwastikSethi/Youtube_Clone",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl font-extrabold text-transparent text-outline leading-none">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-700 transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className=" font-bold leading-none text-white group-hover:text-blue-700 transition-all duration-500 capitalize">
                {project.category} project
              </h3>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-blue-700">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              <div className="flex gap-4 ">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group border hover:border-blue-700">
                        <BsArrowUpRight className=" text-white text-3xl group-hover:text-blue-700" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group border hover:border-blue-700">
                        <BsGithub className="text-white text-3xl group-hover:text-blue-700" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[360px] relative group flex justify-center items-center bg-blue-50/20">
                      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>

                      <div className="relative size-full">
                        <Image
                          className="object-cover"
                          src={project.image}
                          fill
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:top-[calc(360px_+_22px)] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles=" text-white rounded-full text-[22px] size-[44px] flex justify-center items-center transition-all bg-blue-700 hover:bg-blue-600"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
