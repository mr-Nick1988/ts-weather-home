interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

interface WeatherProps {
    weather: WeatherInfo | null;
    message: string;
}

const Weather = ({weather, message}: WeatherProps) => {

    return (
        <div>
            {!message && weather ? (
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}°C</p>
                    <p>Pressure: {weather.pressure} hPa</p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            ) : (
                <>{message}</>
            )}
        </div>
    )
};
export default Weather;
