import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

h2 {
    font-size: 1.25em;
    margin: 5px 0;
}

p {
    font-size: 0.6em;
}

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    width: 100%;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5em;
        color: red;

        :nth-child(2n) {
            color: lightblue;
        }
    }
}

@media (min-width: 600px) and (min-height: 600px) {
    h2 {
        font-size: 1.5em;
    }

    p {
        font-size: 1em;
    }

    div {    
        p {
            font-size: 0.75em;
        }
    }
}
`