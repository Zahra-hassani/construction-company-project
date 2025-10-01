import { Building2, CheckCircle2, HammerIcon, HouseIcon, Pickaxe } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs(){
    return(
        <div className="w-full my-2 lg:my-2 lg:h-fit h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-2 p-3">
            <div className="p-4 flex flex-col gap-3 lg:h-full h-1/2 w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase">About us</h1>
                <p className="font-bold text-2xl py-3 ">Make a new world to have a better life</p>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae voluptatibus sint perspiciatis incidunt dolore alias molestias laborum magnam tenetur voluptas, veniam rem nostrum ullam omnis ipsum assumenda. Deleniti, quaerat!</p>
                <div className="grid grid-cols-2 gap-3 font-bold w-full">
                    <div className="flex items-center gap-2 w-[170px]">
                        <CheckCircle2 className="text-brand" size={34} />
                        <p className="text-wrap">more than 10 years experience</p>
                    </div>
                    <div className="flex items-center gap-2 w-[170px]">
                        <CheckCircle2 className="text-brand" size={34} />
                        <p>expert and experienceful engineers</p>
                    </div>
                    <div className="flex items-center gap-2 w-[170px]">
                        <CheckCircle2 className="text-brand" size={34} />
                        <p>more than 10 years experience</p>
                    </div>
                    <div className="flex items-center gap-2 w-[170px]">
                        <CheckCircle2 className="text-brand" size={34} />
                        <p>more than 10 years experience</p>
                    </div>
                </div>
            </div>
            <div className="lg:h-full h-1/2 flex justify-center relative">
                <img src="./img/About.jpg" className="h-70 md:h-80 w-60 md:w-70 rounded z-20" alt="" />
                <div className="lg:h-75 lg:w-75 md:h-68 md:w-68 h-60 w-60 rounded-full flex justify-between gap-1/4 absolute top-[0%] lg:left-[15%] md:left-[25%] left-[5%] translate-x-[25%] translate-y-[10%] -z-10">
                <motion.div
                 initial={{rotate: 0}}
                 animate={{rotate: 360}}
                 transition={{duration: 10, ease: "linear", repeat:Infinity}}
                 className="flex justify-between flex-col gap-1/4 h-full w-full rounded-full relative">
                <motion.div
                 className="absolute top-0 left-0"
                ><Building2 size={34} className="bg-brand/50 backdrop-blur-xs rounded-md p-2" /></motion.div>
                <motion.div
                 className="absolute top-0 right-0"
                ><Pickaxe size={34} className="bg-brand/50 backdrop-blur-xs rounded-md p-2" /></motion.div>
                <motion.div
                 className="absolute bottom-0 right-0"
                ><HammerIcon size={34} className="bg-brand/50 backdrop-blur-xs rounded-md p-2" /></motion.div>
                <motion.div
                 className="absolute bottom-0 left-0"
                ><HouseIcon size={34} className="bg-brand/50 backdrop-blur-xs rounded-md p-2" /></motion.div>
                </motion.div>
                </div>
            </div>
        </div>
    )
}