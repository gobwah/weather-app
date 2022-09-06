import { Wrapper } from "./Planet.style";

const Planet = ({ children, img, winH }) => {
    return (
        <Wrapper winH={ winH }>
            <img className="background" src={ img } alt='background' />
            <div className="filter"></div>
            <div className="planet-container">
                {children}
            </div>
        </Wrapper>)
}

export default Planet;