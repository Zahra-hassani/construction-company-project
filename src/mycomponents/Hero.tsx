import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
import { Button } from "@/components/ui/button";
const settings:Settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,
initialSlide: 1,
autoplay: true,
arrows: true,
autoplaySpeed: 1500,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false
  }
},
{
  breakpoint: 780,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  }
},
{
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}
]
};
export default function Hero(){
    const engineers:{name:string,role:string,experience: string,imgUrl:string}[] =[
        {
            name: "Alina Brown",
            role: "civil engineer",
            experience:"5 years experience",
            imgUrl: "./img/Alina.jpeg"
        },
        {
            name: "Merila Williams",
            role: "civil engineer",
            experience:"4 years experience",
            imgUrl: "./img/Merila.jpeg"
        },
        {
            name: "Steven Jackson",
            role: "civill engineer",
            experience:"4 years experience",
            imgUrl: "./img/Jack.jpeg"
        },
        {
            name: "Lucas Filcher",
            role: "civil engineer",
            experience:"2 years experience",
            imgUrl: "./img/Luca.jpeg"
        },
        {
            name: "Robert Petterson",
            role: "civil engineer",
            experience:"5 years experience",
            imgUrl: "./img/Robert.jpeg"
        },
        {
            name: "Divid Black",
            role: "civil engineer",
            experience:"3 years experience",
            imgUrl: "./img/Divid.jpeg"
        },
    ] 
    return (
        <div className="h-screen w-full flex justify-between items-center">
            <div className="flex-1 min-w-0 flex flex-col items-center gap-3 p-4">
                <h1 className="lg:text-4xl md:text-2xl moto text-2xl text-center font-bold font-sans">
                    New house, new life, Bringing your dreams to reality
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente repudiandae neque explicabo dicta odit quibusdam cum saepe iusto assumenda officia modi</p>
                <div className="w-full flex justify-center items-center gap-4">
                <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white"><a href="">Services</a></Button>
                <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white"><a href="">Explore more</a></Button>
                </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col items-center gap-4 p-4">
                <h1 className="md:text-2xl text-xl font-bold font-sans">Our Expert Team</h1>
                <Slider {...settings} className="w-full">
                    {engineers.map((engineer,index)=> (
                        <div key={index} className="lg:h-96 md:h-80 w-52 mt-4 mr-4 relative group bg-white">
                            <div className="h-0 w-full flex justify-center flex-col items-center absolute top-0 left-0 gap-3 bg-white/40 backdrop-blur-xs text-black opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-300">
                                <h1 className="font-bold text-xl">{engineer.name}</h1>
                                <h1 className="font-bold text-xl">{engineer.role}</h1>
                                <h1 className="font-bold text-xl">{engineer.experience}</h1>
                            </div>
                            <img src={engineer.imgUrl} alt="engineer" className="h-full w-full rounded object-cover" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}