import styled from "styled-components";

export const Wrapper = styled.aside`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    background: ${props => props.isClicked ? props.color : 'black'};

    :hover {
        background: ${props => props.color};
    }

    button {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: white;
        border: none;
        background: none;        
        font-size: 1.25em;
    }
`