import { Wrapper } from "./Weather.style";

const Weather = ({ icon, city, desc }) => {
    return (
        <Wrapper>
            <img className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="broken clouds" />
            <h2>{city}</h2>
            <p>{desc}</p>
        </Wrapper>
    )
}

export default Weather;