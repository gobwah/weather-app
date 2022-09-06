import { Wrapper } from "./Wind.style";
import { FaLocationArrow } from "react-icons/fa";

const Wind = ({ speed, angle }) => {
    return (
        <Wrapper angle={angle}>
            <div className="wind-direction">
                <FaLocationArrow />
            </div>

            <div className="wind-speed">
                <h2>{speed} km/h</h2>
                <p>{(speed * 0.539957).toFixed(1)} kn</p>
            </div>
        </Wrapper>
    )
}

export default Wind;