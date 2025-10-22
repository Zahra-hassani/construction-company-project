import { FacebookIcon, InstagramIcon, Mail, PhoneCall, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="h-fit lg:mt-4 w-full flex flex-col items-center gap-1 bg-gray-200/30 p-3">
            <img className="h-24 w-24" src="./img/Logo1.png" alt="" />
        <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-3 p-4">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl md:text-3xl py-3">About Company</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fuga ad ullam commodi maiores deleniti eveniet nobis repellat quam mollitia dignissimos. Quidem reiciendis non eaque repellat delectus, ullam quis sapiente!</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl md:text-3xl py-3">Pages</h1>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><Link to="/">Home</Link></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><Link to="/blog">Blog</Link></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><Link to="/services">Services</Link></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><Link to="/about">About Us</Link></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><Link to="/contact">Contact Us</Link></p>
            </div>
            <div className="flex flex-col gap-2 items-start">
                <h1 className="font-bold text-2xl md:text-3xl py-3">Contact Us</h1>
                <p className="flex gap-4">
                    <Mail size={30} />
                    <Link to="#">www.sharifico@gmail.com</Link>
                </p>
                <p className="flex gap-4">
                    <PhoneCall size={30} />
                    0794238756
                </p>
                <p className="flex gap-4">
                    <span className="p-2 bg-brand rounded-full"><FacebookIcon size={30}  className="font-bold hover:text-white rounded-full transition-all duration-300" /></span>
                    <span className="p-2 bg-brand rounded-full"><InstagramIcon size={30} className="font-bold hover:text-white rounded-full transition-all duration-300" /></span>
                    <span className="p-2 bg-brand rounded-full"><YoutubeIcon size={30} className="font-bold hover:text-white rounded-full transition-all duration-300" /></span>
                    <span className="p-2 bg-brand rounded-full"><TwitterIcon size={30} className="font-bold hover:text-white rounded-full transition-all duration-300" /></span>
                </p>
            </div>
        </div>
            <div className="text-center w-full py-2 text-gray-400">
                <h1>Sharifi construction company @2025</h1>
            </div>
        </div>
    )
}