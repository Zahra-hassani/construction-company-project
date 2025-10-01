import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
import { QuoteIcon } from "lucide-react";

const settings:Settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 4,
slidesToScroll: 2,
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

export default function Testimonial(){
    const testimonials:{name:string,imgUrl:string,message:string}[] = [
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
        {
            name: "Ronald Green",
            imgUrl: "./img/Test1.jpg",
            message: "The company services was great. It was a great Housing Project with 20 sqaure meter domine, and Iam really satisfied."
        },
    ]
    return (
        <div className="h-fit lg:my-4 w-full flex flex-col items-center gap-2 p-4">
            <h1 className="font-bold text-center text-2xl md:text-3xl">Our Tesimonials</h1>
            <p className="text-xl text-center">Here is some of our testimonials</p>
            <div className="w-full">
                <Slider {...settings}>
                {testimonials.map((feedback,index)=>(
                    <div className="p-4 rounded slick-test flex flex-col items-center gap-3 border border-gray-300 mx-1.5" key={index}>
                        <QuoteIcon size={34} className="text-brand" />
                        <img src={feedback.imgUrl} className="h-22 w-22 rounded-full" alt="" />
                        <h1 className="font-bold text-xl">{feedback.name}</h1>
                        <p className="text-center">{feedback.message}</p>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}