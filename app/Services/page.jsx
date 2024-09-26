"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";


const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Custom websites built with the latest technologies, tailored to your needs.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and aesthetically pleasing designs for a seamless user experience.',
    href: ""
  },
  {
    num: '03',
    title: 'Logo Design',
    description: 'Unique and creative logos that define your brand identity and make an impact.',
    href: ""
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Improve your website’s ranking on search engines with our expert SEO services.',
    href: ""
  }
];
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container  max-auto">
          <motion.div initial={{opacity:0}} animate={{opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},}}
          
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service,index) =>{
              return(
                  <div className=" flex-1 flex flex-col justify-center gap-6 group" key={index}>
                    <div className="w-full flex justify-between items-center">
                      <div className="text-5xl  font-extrabold text-outline  text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                          <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
                          <BsArrowDownRight className="text-primary text-3xl" />
                          </Link>
                          </div>  
                      <h2 className="text-white text-[42px] leading-none font-bold group-hover:text-accent transition-all duration-500 ">{service.title}</h2 >
                      <p className="text-white/60">{service.description}</p>
                      <div className="border-b border-white/20 w-full"></div>                   
                  </div>

              );
            })}
          </motion.div>
      </div>
    </section>
  )
}

export default Services
