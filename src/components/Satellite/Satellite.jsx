import { Wrapper } from "./Satellite.style";

const colors = {
    orange: 'linear-gradient(141deg, rgba(255,0,45,1) 0%, rgba(254,180,4,1) 100%)',
    green: 'linear-gradient(141deg, rgba(157,255,34,1) 0%, rgba(6,254,152,1) 100%)',
    blue: 'linear-gradient(141deg, rgba(0,227,216,1) 40%, rgba(2,156,247,1) 100%)',
    purple: 'linear-gradient(141deg, rgba(163,34,255,1) 0%, rgba(254,6,249,1) 100%)'
};

const Satellite = ({ children, isClicked, setClicked, color }) => {
    return (
        <Wrapper color={colors[color] || 'black'} isClicked={isClicked}>
            <button onClick={setClicked}>
                { children }
            </button>
        </Wrapper>
    )
}

export default Satellite;