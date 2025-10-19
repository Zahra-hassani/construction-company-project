import Testimonial from "@/mycomponents/Testimonial";
import AboutUs from "../mycomponents/AboutUs";
import Hero from "../mycomponents/Hero";
import FAQ from "@/mycomponents/FAQ";

export default function Home(){
    return(
        <div>
            <Hero />
            <AboutUs />
            <Testimonial />
            <FAQ />
        </div>
    )
}