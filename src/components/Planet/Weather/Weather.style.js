import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.icon {
    width: 25px;
    height: 25px;
}

h2 {
    font-size: 1.25em;
}

p {
    font-size: 0.5em;
}

@media (min-width: 600px) and (min-height: 600px) {
    .icon {
        width: 50px;
        height: 50px;
    }

    h2 {
        font-size: 1.5em;
    }

    p {
        font-size: 0.75em;
    }
}
`