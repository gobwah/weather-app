import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.wind-direction {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.25em;
    margin-bottom: 10px;

    svg {
        transform: rotate(45deg) rotate(${props => props.angle}deg);
    }
}

.wind-speed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 1em;
    }
    
    p {
        font-size: 0.5em;
    }
}

@media (min-width: 600px) and (min-height: 600px) {
    .wind-direction {
        font-size: 1.5em;
    }

    .wind-speed {
        h2 {
            font-size: 1.25em;
        }

        p {
            font-size: 0.75em;
        }
    }
}
`