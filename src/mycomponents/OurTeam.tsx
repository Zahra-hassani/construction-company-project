import { Github, Linkedin, Mail } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

const settings:Settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 1,
initialSlide: 1,
autoplay: true,
arrows: false,
autoplaySpeed: 1500,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 2,
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

export default function OurTeam(){
    type Member = {
        name: string,
        imgUrl: string,
        role: string
    }
    const team :Member[] =[
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
        {
            name:"Merila Golding",
            imgUrl: "./img/Merila.jpeg",
            role: "Frontend developer"
        },
    ]
    return (
        <div className="h-fit w-[90%] flex flex-col items-center gap-4 p-4 mx-auto">
            <h1 className="font-bold lg:text-6xl text-4xl text-center py-2">Our Team</h1>
            <p className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="w-full p-4">
                <Slider {...settings}>
                    {team.map((member,index)=>(
                    <div key={index} className="flex justify-between mx-3 group slick-test relative h-85 flex-col items-center gap-4 p-4 rounded-xl shadow">
                        <img src={member.imgUrl} className="h-full w-full rounded-xl object-cover" alt="" />
                        <div className="group-hover:flex hidden transition-all duration-300 absolute p-1 top-0 left-0 flex-col items-center gap-3">
                            <span className="p-3 transition-colors duration-300 bg-brand rounded-full"><Github size={26} className="text-white hover:text-black" /></span>
                            <span className="p-3 transition-colors duration-300 bg-brand rounded-full"><Linkedin size={26} className="text-white hover:text-black" /></span>
                            <span className="p-3 transition-colors duration-300 bg-brand rounded-full"><Mail size={26} className="text-white hover:text-black" /></span>
                        </div>
                        <div className="h-0 group-hover:h-4/12 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 rounded-b-xl p-4 text-white absolute bottom-0 left-0 flex justify-center flex-col items-center gap-3">
                            <h1 className="font-bold text-brand">{member.name}</h1>
                            <p className="text-base">{member.role}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}