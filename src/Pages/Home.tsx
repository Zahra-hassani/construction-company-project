import Testimonial from "@/mycomponents/Testimonial";
import AboutUs from "../mycomponents/AboutUs";
import Hero from "../mycomponents/Hero";
import FAQ from "@/mycomponents/FAQ";
import Footer from "@/mycomponents/Footer";

export default function Home(){
    return(
        <div>
            <Hero />
            <AboutUs />
            <Testimonial />
            <FAQ />
            <Footer />
        </div>
    )
}