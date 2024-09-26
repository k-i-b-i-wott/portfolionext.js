"use client";

import {SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from'react-icons/ci'

const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"Service",
        path:"/Services"
    },
    {
        name:"Resume",
        path:"/Resume"
    },
    {
        name:"Contact",
        path:"/Contact"
    },
    
]
const MobileNav = () => {
    const pathName=usePathname();
  return <Sheet>
<SheetTrigger className="flex justify-center items-center">
    <CiMenuFries className="text-[32px] text-accent">
    </CiMenuFries>
</SheetTrigger>
<SheetContent className="flex flex-col">
    <div className="mt-32 mb-40 text-center text-2xl">


        {/* logo */}
        <Link href="/" className=""> 
        <h1 className="text-4xl font-semibold">Tanui<span className="text-accent">.</span></h1>
        </Link>
    </div>
    {/* nav */}
    <nav className="flex flex-col justify-center items-center  gap-8">
        {links.map((link,index) =>{ 
            return <Link href={link.path} key={index} className={` ${link.path === pathName && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent  transition-all`}> {link.name}</Link>
        } )}
    </nav>
</SheetContent>
  </Sheet>



}

export default MobileNav
