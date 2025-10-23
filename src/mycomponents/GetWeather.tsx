import { useEffect, useState, useTransition } from "react";

const API_KEY = "f6839771ea9e2b10078df39b4529df81";
const city = "London";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

export default function GetWeather(){
    type weather= {
        main: string,
        description: string,
        icon: string
    }
    interface tempe = {
        temp_min:number,
        temp_max:number
    }
    interface system = {
        sunrise: number,
        sunset: number
    }
    const [weather, setWeather] = useState<weather[]>([]);
    const [sys, setSys] = useState<system>({});
    const [temp, setTemp] = useState<tempe>({});
    const [loading, startTransition] =useTransition();
    useEffect(()=>{
        function fetchData(){
            startTransition( async ()=>{
            const response = await fetch(URL);
            const data = await response.json();
            setWeather(data.weather);
            setTemp(data.main);
            setSys(data.sys);
            })
        }
        fetchData()
    },[])
    return (
        <div>
            <div className="flex justify-between items-center gap-5 w-[90%] mx-auto h-fit">
            {loading?(<h1 className="font-bold text-center">Please wait...</h1>):(
                weather.map((item,index)=>(
                    <div key={index} className="h-fit w-[25%] rounded shadow p-4 flex flex-col items-center gap-4">
                    <div className="shadow rounded flex justify-center items-center gap-4">
                        <img src={`${item.main==="Clear"?"./Weather-icons/sun (1).png":item.main ==="Clouds"?"./Weather-icons/cloudy.png":item.main ==="Thunderstorm"?"./Weather-icons/lightning-bolt.png":item.main ==="Rain"?"./Weather-icons/rain.png":item.main ==="Snow"?"./Weather-icons/snow (1).png":item.main ==="Atmosphere"?item.icon:"not predictable"}`} className="h-20 w-20 rounded" alt="" />
                        <h1>{item.main==="Clear"?"it is sunny in "+city:"it is not sunny in "+city}</h1>
                    </div>
                    <div className="flex justify-between items-center w-full gap-4">
                        <p className="text-base flex items-center gap-2"><img src="./Weather-icons/hot.png" className="h-9 w-9" alt="" />{temp?.temp_min}</p>
                        <p className="text-base flex items-center gap-2"><img src="./Weather-icons/cold.png" className="h-9 w-9" alt="" />{temp?.temp_max}</p>
                    </div>
                    <div className="flex justify-between items-center w-full gap-4">
                        <p className="text-base flex items-center gap-2"><img src="./Weather-icons/sunrise.png" className="h-9 w-9" alt="" />{sys?.sunrise}</p>
                        <p className="text-base flex items-center gap-2"><img src="./Weather-icons/sunset.png" className="h-9 w-9" alt="" />{sys?.sunset}</p>
                    </div>
                    </div>
                ))
            )}
            </div>
        </div>
    )
}