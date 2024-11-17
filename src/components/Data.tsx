

import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";

interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

const Data = () => {

    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null)
    const [message, setMessage] = useState<string>('ENTER CITY NAME');

    const getWeather = (city:string) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                })
                setMessage('')
            })

            .catch((e:Error) => {
                console.log(e);
                setMessage('Enter CORRECT city name')
            })
    }


    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} weather={weatherInfo}/>
        </div>
    );
};

export default Data;

