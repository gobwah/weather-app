import styled from "styled-components";
import mark from './../../assets/backgrounds/mark.png'

export const Wrapper = styled.section`
position: absolute;

display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;

.background {
    position: relative;
    width: 100%;
    height: ${props => props.winH}px;
    object-fit: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: circle(150px);

    @media (min-width: 600px) and (min-height: 600px) {
        clip-path: circle(250px);
    }
}

.filter {
    position: absolute;
    width: 100%;
    height: ${props => props.winH}px;
    background: url(${mark});
    background-repeat: repeat;
    background-size: 10px;
    clip-path: circle(150px);

    @media (min-width: 600px) and (min-height: 600px) {
        clip-path: circle(250px);
    }
}

.planet-container {        
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    border-radius: 50%;
    background-color: black;
    color: white;

    width: 100%;
    height: ${props => props.winH}px;
    clip-path: circle(10%);
}
`