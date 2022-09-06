import { Wrapper } from "./Temperature.style";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const Temperature = ({ temp, feel, max, min }) => {
    return (
        <Wrapper>
            <h2>{Math.round(temp)}°C</h2>
            <p>feels like {Math.round(feel)}°C</p>
            <div>
                <p><AiFillCaretUp/>{Math.round(max)}°C</p>
                <p><AiFillCaretDown/>{Math.round(min)}°C</p>
            </div>
        </Wrapper>
    )
}

export default Temperature;