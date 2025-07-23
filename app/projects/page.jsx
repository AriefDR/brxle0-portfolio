"use client";

import {motion} from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Data Science",
        title: "Telco Customer Churn",
        description: "The growth of the telecommunications industry is currently very rapid. Customers have the right to choose the appropriate provider and can switch from the previous provider which is defined as Customer Churn. Customer churn prediction is important for companies to know to be able to map a business strategy to retain customers.",
        stack: [{name: "Python"}, {name: "Jupyter Notebook"}, {name: "Tableau"}],
        image: "",
        live: "",
        github: "https://github.com/AriefDR/Telco-Customer-Churn"
    },
    {
        num: "02",
        category: "Data Science",
        title: "Titanic Machine Learning from Disaster",
        description: "The sinking of the Titanic is one of the most infamous shipwrecks in historsy. On April 15, 1912, during her maiden voyage, the widely considered “unsinkable” RMS Titanic sank after colliding with an iceberg. Unfortunately, there weren’t enough lifeboats for everyone onboard, resulting in the death of 1502 out of 2224 passengers and crew.",
        stack: [{name: "BigQuery"}, {name: "PowerBI"}, {name: "Colab"}, {name: "Python"}],
        image: "/assets/work/titanic.png",
        live: "",
        github: "https://github.com/AriefDR/Titanic-Machine-Learning-From-Disaster"
    },
    {
        num: "03",
        category: "Web Development",
        title: "Flowelto Shop",
        description: "Flowelto-Shop is an e-commerce website that sells various types of flowers and customers can buy these flowers. develop using HTML, CSS, Javascript, Laravel, MySQL.",
        stack: [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "Laravel"}, {name: "MySQL"}],
        image: "/assets/work/flowelto-shop.png",
        live: "",
        github: "https://github.com/AriefDR/Flowelto-Shop"
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 2.4, ease: "easeIn" } }} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                            <p className="text-white/60 text-justify">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/> 
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/> 
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index ) => {
                              return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-cover" alt="" />
                                    </div>
                                </div>
                              </SwiperSlide>  
                            })}
                            <WorkSliderBtns 
                            containerStyle="flex gap-3 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div> 
                </div>
            </div>
        </motion.div>
    )
};

export default Work;
