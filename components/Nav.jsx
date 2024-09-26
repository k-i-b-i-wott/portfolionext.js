"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links=[
    {
        name:"Home",
        path:"/"
    },
    {
        name:'Services',
        path:'/Services'
    },
    {
        name:'Resume',
        path:'/Resume'
    },
    {
        name:'Work',
        path:'/Work'
    },
    {
        name:'Contact',
        path:'/Contact'
    }
]

const Nav = () => {
    const Pathname=usePathname();
    console.log(Pathname);
    
  return (
    <nav className="flex gap-8">
    {links.map((link,index) =>{

        return(
            <Link href={link.path} key={index} className={`${link.path=== Pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent 
                transition-all`} >{link.name}</Link>
        );
    }
        
        )}
    </nav>
  );
}

export default Nav
