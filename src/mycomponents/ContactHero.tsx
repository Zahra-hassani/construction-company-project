import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero(){
    return (
        <div className="lg:h-screen h-2/3 w-full bg-[url(./img/office-1.jpg)] after:content-[''] after:h-full after:w-full lg:after:bg-black/50 after:bg-black/20 after:absolute after:top-0 after:left-0 after:-z-40 bg-no-repeat bg-cover relative z-30 flex justify-center flex-col items-center gap-3 lg:p-4 p-7 md:py-14">
            <h1 className="font-bold text-center flex justify-center items-center md:text-2xl text-xl py-2 text-white">Home <ChevronRight size={30} className="text-brand translate-y-1" /><Link to="/contact" className="text-brand">Contact us</Link></h1>
            <h2 className="text-white text-center text-base">Share supportation, ideas and feedback</h2>
        </div>
    )
}