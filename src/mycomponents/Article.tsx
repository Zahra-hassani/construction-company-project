import { Button } from "@/components/ui/button";

export default function Article({image,title,description}:{image:string,title:string,description:string}){
    return (
        <div className="flex justify-center flex-col items-center gap-3 rounded-xl shadow">
            <img src={image} alt="News-photo" className="h-40 w-full rounded-t-xl" />
            <h1 className="font-bold text-center text-xl md:text-2xl p-2">{title}</h1>
            <p className="text-center p-2">{description}</p>
            <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white transition-all duration-300">Read more</Button>
        </div>
    )
}