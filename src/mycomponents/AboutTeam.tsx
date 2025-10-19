import { motion } from "framer-motion";

export default function AboutTeam(){
    return (
        <div className="flex lg:justify-between md:flex-col lg:flex-row flex-col p-4 items-center gap-0 h-fit w-full lg:w-6xl mx-auto rounded-xl">
            <motion.div 
            initial={{y: -50,opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration:2, ease: "linear"}}
            className="lg:h-full lg:w-1/2 h-fit w-[90%] p-2">
            <h1 className="font-semibold text-3xl md:text-5xl lg:text-6xl">About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium vel quisquam at rem repellat illum, neque voluptatem incidunt, a dolorum hic itaque placeat sed nostrum iusto aliquid. Doloribus, sint!</p>
            </motion.div>
            <motion.div 
            initial={{y: 50,opacity:0}}
            whileInView={{y: 0, opacity:1}}
            transition={{duration:2, ease: "linear"}}
            className="lg:h-full lg:w-1/2 h-80 w-[90%] p-2">
                {/* images section */}
            <motion.div
            initial={{opacity:0,scale:0,translateY:-50}}
            whileInView={{opacity:1,scale:1,translateY:0}}
            transition={{duration:4, ease:"linear"}}
            >
                <img src="./img/1.jpg" className="h-full w-full"  alt="" />
            </motion.div>
            </motion.div>
        </div>
    )
}