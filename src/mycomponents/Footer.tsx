import { FacebookIcon, InstagramIcon, Mail, PhoneCall, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer(){
    return (
        <div className="h-fit lg:mt-4 w-full flex flex-col items-center gap-1 bg-gray-200/30 p-3">
            <img className="h-24 w-24" src="./img/Logo1.png" alt="" />
        <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-3 p-4">
            <div className="col-span-1 flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl md:text-3xl py-3">About Company</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fuga ad ullam commodi maiores deleniti eveniet nobis repellat quam mollitia dignissimos. Quidem reiciendis non eaque repellat delectus, ullam quis sapiente!</p>
            </div>
            <div className="col-span-1 flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl md:text-3xl py-3">Pages</h1>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><a href="/">Home</a></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><a href="/blog">Blog</a></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><a href="/services">Services</a></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><a href="/about">About Us</a></p>
                <p className="px-2 hover:px-5 text-black hover:text-brand hover:font-bold transition-all duration-300"><a href="/contact">Contact Us</a></p>
            </div>
            <div className="col-span-1 flex flex-col gap-2 items-center">
                <h1 className="font-bold text-2xl md:text-3xl py-3">Contact Us</h1>
                <p className="flex gap-2">
                    <Mail size={30} />
                    <a href="#">www.sharifico@gmail.com</a>
                </p>
                <p className="flex gap-2">
                    <PhoneCall size={30} />
                    0794238756
                </p>
                <p className="flex gap-2">
                    <FacebookIcon size={30}  className="font-bold hover:text-white hover:bg-black text-black bg-white p-4 rounded-full transition-all duration-300" />
                    <InstagramIcon size={30} className="font-bold hover:text-white hover:bg-black text-black bg-white p-4 rounded-full transition-all duration-300" />
                    <YoutubeIcon size={30} className="font-bold hover:text-white hover:bg-black text-black bg-white p-4 rounded-full transition-all duration-300" />
                    <TwitterIcon size={30} className="font-bold hover:text-white hover:bg-black text-black bg-white p-4 rounded-full transition-all duration-300" />
                </p>
            </div>
        </div>
            <div className="text-center w-full py-2 text-gray-400">
                <h1>Sharifi construction company @2025</h1>
            </div>
        </div>
    )
}