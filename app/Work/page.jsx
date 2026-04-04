"use client";

import { motion } from "framer-motion";
import React from "react";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";


  const projects=   
      [
        
        {
          num: "01",
          title: "Frontend",
          category: "Village Hub",
          description: "A modern frontend application developed with Next.js and styled using Tailwind CSS. This project focuses on creating a highly interactive user interface with clean and reusable code.",
          stack: [{ name: "Next.js" }, { name: "CSS 3" }, { name: "Tailwind.css" }],
          image: "/assets/work/img4.jpg", 
          live: " ", 
          github: "https://github.com/k-i-b-i-wott/telemed",
        },
        {
          num: "02",
          title: "VeryDorm",
          category: "Real Estate Website",
          description: "VeryDorm is a modern real estate platform for listing and finding dormitories and apartments. Built with React and Material-UI for a sleek UI, Node.js (Express) for the backend, and Firestore for real-time data storage. Features include property search, user authentication, and secure messaging between tenants and landlords.",
          stack: [
            { name: "React" },
            { name: "Javascript" },
            { name: "Material-UI" },
            { name: "Node.js (Express)" },
            { name: "Firestore" }
          ],
          image: "/assets/work/verydorm.png",
          live: "https://verydorm.com",
          github: "https://github.com/k-i-b-i-wott/VeryDorm"
        },
        
        {
          num: "04",
          title: "BlogIt",
          category: "Blog Application",
          description: "A full-featured blog application built with React and TypeScript for the frontend, styled with Material-UI, and powered by a Node.js (Express) backend with PostgreSQL for robust data storage. Features include user authentication, post creation/editing, comments, and responsive design.",
          stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Material-UI" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "PostgreSQL" }
          ],
          image: "/assets/work/blogit.png",
          live: "https://blogit-front-end-eesk.vercel.app/",
          github: "https://github.com/k-i-b-i-wott/BlogitFrontEnd"
        },
        {
  num: "05",
  title: "Dentalink",
  category: "Patient-Dentist Linking Platform",
  description: "Dentalink connects patients with dentists through a comprehensive telehealth platform. Built with React and TypeScript, powered by Node.js, PostgreSQL, and Prisma ORM. Features real-time video consultations with WebRTC, Socket.IO communications, LLM-powered chatbot for patient support, online prescription management, and M-Pesa payment integration. Frontend: https://github.com/TanuiDev/smile-access-hub | Backend: https://github.com/TanuiDev/dentalinkBackend | Chatbot: https://github.com/TanuiDev/Chatbot",
  stack: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Zustand" },
    { name: "WebRTC" },
    { name: "Socket.IO" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Prisma ORM" },
    { name: "LLM Chatbot" },
    { name: "M-Pesa" }
  ],
  image: "/assets/work/dentalink.png",
  live: "https://smile-access-hub.vercel.app/",
  github: "https://github.com/TanuiDev/smile-access-hub"
},{
  num: "06",
  title: "Device Care",
  category: "Device Management & Maintenance Platform",
  description: "A comprehensive platform for organizations to manage and maintain their device inventory, assign devices to employees, and handle defect reporting. Features role-based access control (RBAC), comprehensive testing suite (unit, integration, and E2E tests), and a professional dashboard for device tracking and employee management.",
  stack: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Redux Toolkit" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "Microsoft SQL Server" },
    { name: "RBAC" },
    { name: "Jest" },
    { name: "Cypress" },
    { name: "Integration Testing" }
  ],
  image: "/assets/work/devicecare.png",
  live: "https://devicecare.vercel.app/",
  github: "https://github.com/TanuiDev/DeviceCare"
},
{
  num: "07",
  title: "Sweetdelights",
  category: "Cake Ordering & Management Platform",
  description: "A modern cake ordering application that streamlines online cake purchases and management. Featuring a role-based access control system, comprehensive testing coverage (unit, integration, and E2E), and automated CI/CD pipelines with GitHub Actions. Enables customers to browse and order cakes while providing administrators with inventory and order management capabilities. Frontend: https://github.com/TanuiDev/sweet-Delights | Backend: https://github.com/TanuiDev/CakeManagementAPIs",
  stack: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Redux Toolkit" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "RBAC" },
    { name: "JWT" },
    { name: "Jest" },
    { name: "Cypress" },
    { name: "GitHub Actions" },
    { name: "CI/CD" }
  ],
  image: "/assets/work/sweetdelights.png",
  live: "https://sweet-delights-eta.vercel.app/",
  github: "https://github.com/TanuiDev/sweet-Delights"
}
  ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen flex flex-col justify-center py-12 px-4 lg:px-0"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A collection of full-stack applications showcasing modern web technologies, cloud infrastructure, and innovative features.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Project Number */}
                <div className="text-xs font-bold text-accent mb-2 uppercase tracking-widest">
                  Project {project.num}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Category */}
                <p className="text-sm text-white/60 mb-3">{project.category}</p>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-accent/80 font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/30 hover:bg-accent/20 transition-colors"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/30">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {/* Live Project */}
                  {project.live && project.live.trim() && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-10 h-10 rounded-full bg-accent/20 flex justify-center items-center group/btn hover:bg-accent hover:text-black transition-all">
                            <BsArrowUpRight className="text-accent group-hover/btn:text-black text-lg" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}

                  {/* GitHub */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-10 h-10 rounded-full bg-accent/20 flex justify-center items-center group/btn hover:bg-accent hover:text-black transition-all">
                          <BsGithub className="text-accent group-hover/btn:text-black text-lg" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work
