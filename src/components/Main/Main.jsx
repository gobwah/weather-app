import { Wrapper } from "./Main.style";
import { useFetch, useImagePreloader } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import Satellite from "../Satellite/Satellite";
import { TiWeatherPartlySunny, TiThermometer } from 'react-icons/ti';
import { BsWind, BsThreeDots } from 'react-icons/bs'
import Planet from "../Planet/Planet";
import Weather from "../Planet/Weather/Weather";
import Temperature from "../Planet/Temperature/Temperature";
import Wind from "../Planet/Wind/Wind";
import Miscellaneous from "../Planet/Misc/Miscellaneous";

const orangeImg = new Image();
orangeImg.src = 'https://fotomelia.com/wp-content/uploads/2017/05/fotomelia-38-1560x1041.jpg'
const greenImg = new Image();
greenImg.src = 'https://i.pinimg.com/originals/a5/41/4a/a5414a548472b10bad728649c8e8cf93.jpg';
const blueImg = new Image();
blueImg.src = 'https://s1.1zoom.me/b5050/796/378168-svetik_1920x1080.jpg';
const purpleImg = new Image();
purpleImg.src = 'https://www.10wallpaper.com/wallpaper/1366x768/1303/pink_haze_and_stones-beautiful_scenic_HD_wallpaper_1366x768.jpg';

const preloadSrcList = [
    orangeImg.src,
    greenImg.src,
    blueImg.src,
    purpleImg.src
];

const Main = ({ lat, long }) => {    
    const { imagesPreloaded } = useImagePreloader(preloadSrcList);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [selectedImg, setSelectedImg] = useState(blueImg);
    const [satelliteClicked, setSatelliteClicked] = useState({
        weather: true,
        wind: false,
        misc: false,
        temp: false
    });

    window.addEventListener('resize', () => {
        setWindowHeight(window.innerHeight);
    })
    
    const { data, loading, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPENWEATHER_APIKEY}&units=metric`);
    const [planetContent, setPlanetContent] = useState(<Weather icon={''} city={''} desc={''} />);

    useEffect(() => {
        if(satelliteClicked.wind) {
            setSelectedImg(greenImg);
            setPlanetContent(<Wind speed={data?.wind?.speed} angle={data?.wind?.deg} />);
        } else if(satelliteClicked.misc) {
            setSelectedImg(purpleImg);
            setPlanetContent(<Miscellaneous cloudiness={data.clouds.all} humidity={data.main.humidity} pressure={data.main.pressure} visibility={data.visibility} sunrise={data.sys.sunrise} sunset={data.sys.sunset} timezoneOffset={data.timezone} />);
        } else if(satelliteClicked.temp) {
            setSelectedImg(orangeImg);
            setPlanetContent(<Temperature temp={data?.main?.temp} feel={data?.main?.feels_like} min={data?.main?.temp_min} max={data?.main?.temp_max} />);
        } else {
            setSelectedImg(blueImg);
            setPlanetContent(<Weather icon={data?.weather && data.weather[0]?.icon} city={data?.name} desc={data?.weather && data.weather[0]?.description} />);
        }
    }, [satelliteClicked, data]);

    if(error) {
        return <div>{`Error: ${error}`}</div>
    }

    return (
        !imagesPreloaded || loading ? 'Waiting for data...' : 
        <Wrapper img={ selectedImg.src } winH={ windowHeight }>
            <img className="main-img" src={ selectedImg.src } alt='Background' />
            <Planet img={ selectedImg.src } winH={ windowHeight }>
                {planetContent}
            </Planet>

            <ul className="satellite-container">
                <li>
                    <Satellite isClicked={satelliteClicked.temp} setClicked={() => setSatelliteClicked((prev) => { 
                        return {
                            ...prev,
                            wind: false,
                            misc: false,
                            temp: true,
                            weather: false
                        }
                    })} color={'orange'}>
                        <TiThermometer />
                    </Satellite>
                </li>
                <li>
                    <Satellite isClicked={satelliteClicked.misc} setClicked={() => setSatelliteClicked((prev) => { 
                        return {
                            ...prev,
                            wind: false,
                            misc: true,
                            temp: false,
                            weather: false
                        }
                    })} color={'purple'}>
                        <BsThreeDots />
                    </Satellite>
                </li>
                <li>
                    <Satellite isClicked={satelliteClicked.wind} setClicked={() => setSatelliteClicked((prev) => { 
                        return {
                            ...prev,
                            wind: true,
                            misc: false,
                            temp: false,
                            weather: false
                        }
                    })} color={'green'}>
                        <BsWind />
                    </Satellite>
                </li>
                <li>
                    <Satellite isClicked={satelliteClicked.weather} setClicked={() => setSatelliteClicked((prev) => { 
                        return {
                            ...prev,
                            wind: false,
                            misc: false,
                            temp: false,
                            weather: true
                        }
                    })} color={'blue'}>
                        <TiWeatherPartlySunny />
                    </Satellite>
                </li>
            </ul>
        </Wrapper>
        );
    };
    
    export default Main;