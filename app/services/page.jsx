"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: "Fullstack Developer",
        description: "Develop end-to-end web applications using modern frontend libraries and backend frameworks. Combine intuitive UI design with scalable server-side logic, ensuring seamless performance, reliability, and maintainability across the entire stack.",
        href: "",
    },
    {
        num: '02',
        title: "Backend Engineer",
        description: "Architect and implement robust backend systems with a focus on API development, performance, and scalability. Work with databases, messaging queues, and cloud infrastructure to deliver secure and optimized services for real-time applications.",
        href: "",
    },
    {
        num: '03',
        title: "Software Engineer",
        description: "Solve real-world problems by writing clean, modular, and well-tested code. Contribute to all phases of development, from planning and design to deployment and maintenance, across platforms and services with a focus on performance and usability.",
        href: "",
    },
    {
        num: '04',
        title: "Data Engineer",
        description: "Design and manage data pipelines to transform, validate, and load large-scale datasets. Build reliable ETL workflows using Python, Spark, and SQL to support analytics, reporting, and machine learning in modern data-driven environments.",
        href: "",
    }

]

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ 
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
                }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60 text-justify">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
};

export default Services;
