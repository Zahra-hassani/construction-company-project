import { ChevronDown } from "lucide-react"
import { useState } from "react"
import {motion} from "framer-motion";

function Response({q, a, index}:{q:string,a:string,index:number}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
        initial={{x: -100}}
        whileInView={{x: 0}}
        viewport={{once: false, amount: 0.3}}
        transition={{duration: 1, ease: "linear", delay: index * 0.2}}
         className="w-full">
            <div className="flex justify-between w-full" onClick={()=> setIsOpen(!isOpen)}>
                <h1>{q}</h1>
                <ChevronDown size={34} className={`font-bold ${isOpen?"transition-transform rotate-180 duration-300":""}`} />
                </div>
            <div className={`${isOpen?"block":"hidden"} p-4 bg-gray-50 w-full text-center text-base`}>
                <h1 className={`${isOpen?"block":"hidden"}`}>{a}</h1>
            </div>
            </motion.div>
            )

}




export default function FAQ(){
    const Faq:{Q:string,A:string}[] = [
        {
            Q: "What are the company services?",
            A: "This company has many services for thier customers."
        },
        {
            Q: "What are the company services?",
            A: "This company has many services for thier customers."
        },
        {
            Q: "What are the company services?",
            A: "This company has many services for thier customers."
        },
        {
            Q: "What are the company services?",
            A: "This company has many services for thier customers."
        },
    ]
    return (
        <div className="h-fit lg:my-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0">
            <div className="lg:h-full w-full flex justify-center flex-col items-center gap-2 py-4">
            <h1 className="text-2xl font-bold lg:text-4xl md:text-3xl text-center">Frequently Asked Questions</h1>
            <p className="text-base text-center">mostly asked questions about our company by people</p>
            </div>
            <div className="lg:h-full w-full flex justify-center flex-col items-center gap-0">
                {Faq.map((Question, index)=> (
                    <div key={index} className="p-4 w-full font-semibold text-center flex justify-between flex-col items-center gap-0 border-gray-300 border-b">
                        <Response q={Question.Q} a={Question.A} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}