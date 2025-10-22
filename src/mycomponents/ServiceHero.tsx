import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceHero(){
    return (
        <div className="lg:h-screen h-2/3 w-full bg-[url(./img/services-5.jpg)] after:content-[''] after:h-full after:w-full after:bg-black/20 after:absolute after:top-0 after:left-0 after:-z-40 bg-no-repeat bg-cover relative z-30 flex justify-center flex-col items-center gap-3 lg:p-4 p-7 md:py-14">
        {/* <img src="./img/services-5.jpg" className="absolute top-0 left-0 backdrop-contrast-lg h-full w-full -z-50" alt="Services" /> */}
        <h1 className="font-bold text-center flex justify-center items-center md:text-2xl text-xl py-2 text-white">Home <ChevronRight size={30} className="text-brand translate-y-1" /><Link to="/services" className="text-brand">Services</Link></h1>
        <h2 className="text-white text-center text-base">Our services</h2>
        </div>
    )
}