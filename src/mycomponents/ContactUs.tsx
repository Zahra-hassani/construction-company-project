import { Button } from "@/components/ui/button";
import { FacebookIcon, Mail, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactUs(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");
    function handleSubmit(e:any){
        e.preventDefault();
        const public_key = "po8ME3bb-qOm-rDfA";
        const template_id = "template_x6s629d";
        const service_id = "service_e3vbiqd";
        const content:{from_name:string,from_email:string,subject:string, to_name:string,message:string} = {
            from_name: name,
            from_email: email,
            subject: subject,
            to_name: "Zahra Hassani",
            message: message
        }
        const toaster = ()=>toast("Sended successfully");
        emailjs
      .send(service_id, template_id, content, {
        publicKey: public_key,
      })
      .then(
        () => {
          alert("Sended successfully");
          toaster();
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        () => {
          alert('FAILED...');
        },
      );

    }
    return (
        <div className="h-fit w-full lg:w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between justify-between items-center lg:gap-0 gap-4 p-4">
            <div className="flex  justify-center flex-col items-center gap-3 lg:w-1/2 w-full py-4 px-2 border-r-2 border-brand">
            <h1 className="text-brand font-bold text-3xl md:text-4xl py-3">Get in touch</h1>
            <div className="flex flex-col items-start gap-2 w-full">
                <p className="flex justify-between items-center gap-4"><Mail size={30} className="text-brand"/><span>www.sharifico@gamil.com</span> </p>
                <p className="flex justify-between items-center gap-4"><Phone size={30} className="text-brand"/><span>0793785643</span> </p>
                <p className="flex justify-between items-center gap-4"><FacebookIcon size={30} className="text-brand"/><span>Sharifi Construction company</span> </p>
            </div>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio doloribus error voluptatibus consequatur, delectus cupiditate rerum, et laboriosam deserunt aliquid at obcaecati tempore odio ipsa repellendus! Quasi impedit autem labore?</p>
            </div>
            <div className="flex lg:w-1/2 w-full p-2">
            <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3 w-full">
                <h1 className="font-bold py-3 text-brand text-3xl md;text-4xl text-center">Send us message</h1>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Your name" className="px-3 py-1 border border-brand rounded shadow" />
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" className="px-3 py-1 border border-brand rounded shadow" />
                <input value={subject} onChange={(e)=> setSubject(e.target.value)} type="text" placeholder="subject" className="px-3 py-1 border border-brand rounded shadow" />
                <textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="" placeholder="Enter Your message" id="" className="px-3 py-1 h-30 w-full border border-brand rounded shadow"></textarea>
                <Button className="text-white shadow text-xl bg-brand hover:text-brand hover:bg-white font-bold">Send</Button>
                <Toaster
                 position="bottom-right"
                 toast-options={{
                    success:{
                        duration: 3000,
                        style:{
                            background:'#363636',
                            font: 34
                        }
                    }
                 }}
                 />
            </form>
            </div>
        </div>
    )
}