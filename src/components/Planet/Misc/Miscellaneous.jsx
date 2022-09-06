import { Wrapper } from "./Miscellaneous.style";
import { IoIosWater, IoIosEye, IoIosCloudy, IoIosSpeedometer } from 'react-icons/io'
import { FiSunrise, FiSunset } from 'react-icons/fi'

const formatTime = (timeInMs, timezoneOffset) => {
    const date = new Date((timeInMs + timezoneOffset) * 1000);
    console.log(date)
    return date ? `${date.getUTCHours()}:${date.getUTCMinutes()}` : '';
}

const Miscellaneous = ({ humidity, visibility, cloudiness, pressure, sunrise, sunset, timezoneOffset}) => {
    return (
        <Wrapper>
            <div>
                <IoIosWater />
                <p>{Math.round(humidity)}%</p>
            </div>
            <div>
                <IoIosEye />
                <p>{(visibility / 1000).toFixed(1)} km</p>
            </div>
            <div>
                <IoIosCloudy />
                <p>{Math.round(cloudiness)}%</p>
            </div>
            <div>
                <IoIosSpeedometer />
                <p>{pressure}hPa</p>
            </div>
            <div>
                <FiSunrise />
                <p>{formatTime(sunrise, timezoneOffset)}</p>
            </div>
            <div>
                <FiSunset />
                <p>{formatTime(sunset, timezoneOffset)}</p>
            </div>
        </Wrapper>
    )
}

export default Miscellaneous;