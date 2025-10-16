import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const api_key = "082d65c946d5a0ae1162d0e99b9bd3e8";
const URL = `https://gnews.io/api/v4/search?q=Business&lang=en&max=3&apikey=${api_key}`;

export default function Articles(){
    type Article={
        id:string,
        title: string,
        description: string,
        content: string,
        url: string,
        image: string,
        publishedAt: string,
    }
    const [ news , setNews ] = useState<Article[]>([]);
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(URL);
            const data = await response.json();
            setNews(data.articles);
        }
        fetchData();
    },[news]);

    return (
        <div className="w-full flex justify-center flex-col items-center gap-3 p-4">
            <h1 className="font-bold text-2xl md:text-3xl text-center">All Blogs</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full">
                {news.map((item)=>(
                    <div key={item.id} className="flex justify-center flex-col items-center gap-3 rounded-xl shadow">
                        <img src={item.image} alt="News-photo" className="h-40 w-full rounded-t-xl" />
                        <h1 className="font-bold text-center text-xl md:text-2xl p-2">{item.title}</h1>
                        <p className="text-center p-2">{item.description}</p>
                        <Button variant="outline" className="bg-brand text-white hover:text-brand hover:bg-white transition-all duration-300">Read more</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}