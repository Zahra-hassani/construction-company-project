import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar(){
    const navList = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Services",
            href: "/services"
        },
        {
            title: "Blog",
            href: "/blog"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        },
        {
            title: "Weather",
            href: "/weather"
        },
        
    ]
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="h-20 w-full bg-stone-100/40 shadow backdrop-blur-sm px-4 z-50 sticky top-0 left-0">
            <div className="lg:flex hidden h-full justify-between items-center gap-4">
            <div>
                <img src="./img/Logo1.png" className="h-20 w-20"  alt="" />
            </div>
            <div className="text-base font-bold flex justify-between items-center space-x-4">
                {navList.map((item,idx)=>(
                    <a key={idx} href={item.href} className="relative after:content-[''] after:w-0 after:transition-all after:duration-500 after:h-0.5 after:bg-brand after:absolute after:left-0 after:bottom-0 hover:after:w-full">{item.title}</a>
                ))}
            </div>
            <div className="lg:block hidden">
                <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white">Get weather</Button>
            </div>
            </div>
            {/* moblie & tablet mode */}
            <div className="flex lg:hidden h-full justify-between items-center space-x-4">
                <div>
                    <img src="./img/Logo1.png" className="h-20 w-20" alt="" />
                </div>
                <div className={`${isOpen?"flex":"hidden"} translate-y-50 p-5 bg-stone-100/30 backdrop-blur-md text-base text-black h-fit w-full font-bold flex-col items-center space-y-4`}>
                {navList.map((item,idx)=>(
                    <a key={idx} href={item.href} className="relative text-blue-600 after:content-[''] after:w-0 after:transition-all after:duration-500 after:h-0.5 after:bg-brand after:absolute after:left-0 after:bottom-0 hover:after:w-full">{item.title}</a>
                ))}
            <div>
                <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white">Get weather</Button>
            </div>
                </div>
            <div className="lg:hidden block">
                <Menu className={`${isOpen?"hidden":"block"}`} onClick={()=> setIsOpen(!isOpen)} size={24} />
                <X className={`${!isOpen?"hidden":"block"}`} onClick={()=> setIsOpen(!isOpen)} size={24} />
            </div>
            </div>
        </div>
    )
}