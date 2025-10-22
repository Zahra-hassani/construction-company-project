import { useEffect, useState, useTransition } from "react";

const API_KEY = "f6839771ea9e2b10078df39b4529df81";
const city = "London";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

export default function GetWeather(){
    type weather= {
        main: string,
        description: string
    }
    const [weather, setWeather] = useState<weather[]>([]);
    const [loading, startTransition] =useTransition();
    useEffect(()=>{
        function fetchData(){
            startTransition( async ()=>{
            const response = await fetch(URL);
            const data = await response.json();
            setWeather(data.weather);
            })
        }
        fetchData()
    },[])
    return (
        <div>
            {loading?(<h1 className="font-bold text-center">Please wait...</h1>):(
                weather.map((item,index)=>(
                    <div key={index} className="shadow rounded flex justify-center items-center gap-4">
                        <img src={`${item.main==="Clear"?"./Weather-icons/sun (1).png":item.main ==="Clouds"?"./Weather-icons/cloudy.png":"not predictable"}`} className="h-20 w-20 rounded" alt="" />
                        <h1>{item.main==="Clear"?"it is sunny in "+city:"it is not sunny in "+city}</h1>
                    </div>
                ))
            )}
        </div>
    )
}