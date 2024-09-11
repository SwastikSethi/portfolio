"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

const about = {
  title: "About Me",
  description: "Final Year Computer Science Student in UIET, Panjab University",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Swastik Sethi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9463758274",
    },
    {
      fieldName: "Email",
      fieldValue: "swastiksethi7@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Punjabi",
    },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My Experience",
  description: "experience description",
  items: [
    {
      company: "UIET, Pankab University",
      position: "Research Intern",
      duration: "May 2023 - August 2023",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  description: "education description",
  items: [
    {
      institute: "UIET, Pankab University",
      degree: "B.E. Computer Science and Engineering",
      duration: "2021 - 2025",
    },
    {
      institute: "The British School",
      degree: "Class 12",
      duration: "2021",
    },
    {
      institute: "Manav Mangal High School",
      degree: "Class 10",
      duration: "2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Skills description",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDb",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  gap-1"
                        >
                          <span className="text-blue-700">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] mmin-h-[60px] text-center ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] rounded-full bg-blue-700"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="max-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  gap-1"
                        >
                          <span className="text-blue-700">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] mmin-h-[60px] text-center ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] rounded-full bg-blue-700"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills  */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:ml-0">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-blue-700 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 gap-y-6 max-w-[600px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex flex-wrap items-center justify-center xl:justify-start gap-4 " key={index}>
                        <span className="text-white/60">{item.fieldName} : </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
