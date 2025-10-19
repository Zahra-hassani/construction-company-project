import Service from "@/mycomponents/Service";
import ServiceHero from "@/mycomponents/ServiceHero";

export default function Services(){
    return(
        <div className="w-full relative">
            <ServiceHero />
            <Service />
        </div>
    )
}