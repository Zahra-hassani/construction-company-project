import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

function More({more}:{more:string}){
    const [isOpen , setIsOpen ] = useState(false);
    return (
        <div className="w-[95%] mx-auto flex justify-center flex-col items-center gap-2">
            <Button variant="outline" className="bg-brand text-white hover:bg-white hover:text-brand" onClick={()=> setIsOpen(!isOpen)}>Read more <ChevronDown size={34} className={` ${isOpen?"rotate-180":""}`} /></Button>
            <p className={`text-gray-400 p-4 rounded bg-white shadow ${isOpen?"block":"hidden"}`}>{more}</p>
        </div>
    )
}





export default function Service(){
    const services:{imgUrl:string,heading:string,description:string,more:string}[] = [
        {
            imgUrl: "./img/services-4.jpg",
            heading: "Work With Energetic Team",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/green-building.jpg",
            heading: "Greenview Apartments",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/3-1.jpg",
            heading: "Premier Office Tower",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/2-1.jpg",
            heading: "Mixed-Use Development",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/House-renovation.jpg",
            heading: "House Renovation",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/builder-roofer.jpg",
            heading: "Metal Roofing",
            description: "Homeowners Can Have Confidance In Thier Choice Of A Metal Roofing Contractor Knowing They Have Met Certain Requirements In Thier Services.",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/slider04.jpg",
            heading: "Construction Consultant",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
        {
            imgUrl: "./img/slider03.jpg",
            heading: "General Contracting",
            description: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
            more: "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In... Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In..."
        },
    ]
    const [text ,setText] = useState("");
    const [filteredServices, setFilteredServices] = useState(services);
    useEffect(()=>{
        if(text.trim()=== ""){
            setFilteredServices(services);
        }
        else{
            const newArray = services.filter(item =>{
                return item.heading.toLowerCase().includes(text.toLowerCase()); 
            })
            setFilteredServices(newArray);
        }
    },[text,services])
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="flex justify-center w-full bg-gray-100/40 backdrop-blur-md p-3">
            <input type="search" value={text} onChange={(e)=> setText(e.target.value)} className="w-1/2 px-3 py-1 rounded shadow border border-gray-300 outline-0" placeholder="Search Services..." />
            </div>
            <h1 className="text-brand uppercase relative text-center after:content-[''] after:h-0 after:bg-brand after:w-20 md:after:w-40 after:absolute after:top-3 after:border-b after:border-brand after:left-30 before:content-[''] before:h-0 before:bg-brand before:w-20 md:before:w-40 before:absolute before:top-3 before:border-b before:border-brand before:right-30">Our services</h1>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">We Provide Effective Solution In Construction</h1>
            <div className="w-[90%] lg:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
                {filteredServices.length >0?filteredServices.map((service,index)=>(
                    <div key={index} className="lg:w-fit flex flex-col items-center gap-3 w-[95%] mx-auto md:w-fit p-4 rounded-xl shadow">
                        <img src={service.imgUrl} alt="building" className="w-full rounded-xl h-30 md:h-36 lg:h-40" />
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2 font-sans">{service.heading}</h1>
                        <p className="text-gray-400">{service.description}</p>
                        <More more={service.more} />
                    </div>
            )):<h1 className="text-gray-500 mx-auto text-xl text-center">No Services Found</h1>
            }
            </div>
        </div>
    )
}