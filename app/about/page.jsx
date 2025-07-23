"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs, SiGo, SiPostgresql, SiApachespark, SiDocker, SiAmazonwebservices, SiMysql, SiApachehadoop, SiFastapi, SiPostman} from 'react-icons/si';

const about = {
    title: "About Me",
    description: "I'm a software and data engineer with a strong interest in building scalable systems, from APIs to data pipelines. I enjoy solving problems through clean, efficient code and have experience working with Python, Go, and various cloud and data technologies. I'm committed to continuous learning and delivering meaningful solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Arief Dwi Rachmadian"
        },
        {
            fieldName: "Eperience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "ariefdwir16@gmail.com"
        },
        {
            fieldName: "Location",
            fieldValue: "Indonesia"
        },
        {
            fieldName: "Phone",
            fieldValue: "+6281291615545"
        },
        {
            fieldName: "Open to Work",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesia(native) English(B1)"
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My experience",
    description: "I have hands-on experience in building and maintaining scalable systems, both in data and software domains. I've been involved in various roles—from fullstack development to data engineering—where I’ve designed APIs, developed ETL pipelines, and contributed to cloud-based infrastructure.",
    items: [
        {
            company: "Hara Token",
            position: "Data Engineer",
            duration: "Oct 2023 - April 2025",
        },
        {
            company: "Dattabot",
            position: "Data Engineer Intern",
            duration: "Aug 2023 - Oct 2023",
        },
        {
            company: "PT Acset Indonusa Tbk",
            position: "Application Developer",
            duration: "Feb 2021 - Feb 2022",
        },
        {
            company: "PT Tri Mitra Resources",
            position: "Web Developer",
            duration: "Aug 2017 - Oct 2017",
        }
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My education",
    description: "I graduated with a Bachelor's degree in Computer Science from Bina Nusantara University and have completed additional training in Fullstack Development at Phincon and Data Science through the Digital Talent Scholarship. I also joined an English program at EF to improve communication skills.",
    items: [
        {
            institution: "EF Language Abroad",
            degree: "English Language Program (Intermediate B1)",
            duration: "Jan 2024 - Jan 2025",
        },
        {
            institution: "Phincon",
            degree: "Fullstack Developer Trainee Program",
            duration: "Jul 2023",
        },
        {
            institution: "Digital Talent Scholarship",
            degree: "Online Course in Data Science",
            duration: "Mar 2023 - Apr 2023",
        },
        {
            institution: "Bina Nusantara University",
            degree: "Bachelor's Degree in Computer Science",
            duration: "Oct 2018 - Sep 2022",
        },
        {
            institution: "Telkom School Jakarta",
            degree: "Vocational High School in Software Engineering",
            duration: "Jul 2015 - Jul 2018",
        }
    ]

}

const skills = {
    title: "My skills",
    description: "I work with Python, Go, and JavaScript to build backend systems and data pipelines. I'm familiar with tools like PostgreSQL, Spark, Docker, and AWS, and apply clean code, modular design, and performance optimization in every project.",
    skillList: [
        {
            name: "Go",
            icon: <SiGo />
        },
        {
            name: "Python",
            icon: <FaPython />
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />
        },
        {
            name: "PosgreSQL",
            icon: <SiPostgresql />
        },
        {
            name: "MySQL",
            icon: <SiMysql />
        },
        {
            name: "Apache Spark",
            icon: <SiApachespark />
        },
        {
            name: "Hadoop",
            icon: <SiApachehadoop />
        },
        {
            name: "Docker",
            icon: <SiDocker />
        },
        {
            name: "Postman",
            icon: <SiPostman />
        },
        {
            name: "AWS",
            icon: <SiAmazonwebservices />
        }
    ]

}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { degrees, motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
         }}
         className="flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[198px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}> 
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60 text-md">{item.fieldName}</span>
                                            <span className="text-lg">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;
