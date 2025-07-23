"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+62 812 9161 5545"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "ariefdwir16@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Kota Tangerang, Banten, Indonesia"
    }
]

const Contact = () => {
    return (
        <motion.div 
        initial={{ opacity: 0}}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease:"easeIn" }
        }}
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target;
                                const firstname = form.firstname.value;
                                const lastname = form.lastname.value;
                                const email = form.email.value;
                                const phone = form.phone.value;
                                const service = form.service.value;
                                const message = form.message.value;

                                const subject = `Service Inquiry from ${firstname} ${lastname}`;
                                const body = `Name: ${firstname} ${lastname}%0DEmail: ${email}%0DPhone: ${phone}%0DService: ${service}%0DMessage: ${message}`;

                                window.location.href = `mailto:ariefdwir16@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                            }}
                            >
                            <h3 className="text-4xl text-accent">Let's work together</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Firstname" required />
                                <Input type="text" name="lastname" placeholder="Lastname" required />
                                <Input type="email" name="email" placeholder="Email Address" required />
                                <Input type="tel" name="phone" placeholder="Phone number" />
                            </div>

                            <Select name="service" required>
                                <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="Fullstack Developer">Fullstack Developer</SelectItem>
                                    <SelectItem value="Backend Engineer">Backend Engineer</SelectItem>
                                    <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                                </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." required />

                            <Button type="submit" size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Contact;
