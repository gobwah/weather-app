import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-gap: 10px;

font-size: 0.5em;

div {
    display: flex;
    justify-content: flex-sart;
    align-items: center;
    gap: 2px;
}

@media (min-width: 600px) and (min-height: 600px) {
    font-size: 1em;
    
    div {
        display: flex;
        justify-content: flex-sart;
        align-items: center;
        gap: 5px;
    }
}
`