import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    .main-img {
        width: 100%;
        height: ${(props => props.winH)}px;
        object-fit: cover;
        opacity: 0.5;
    }

    .satellite-container {
        position: absolute;
        width: 100%;
        height: 100%;
        list-style-type: none;

        li {
            position: absolute;
            top: calc(50% - 25px);
            left: calc(50% - 25px);

            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-item: center;
            clip-path: circle(50%);

            background-color: black;

            :nth-child(1) {
                transform: rotate(0deg) translate(150px);
            }
    
            :nth-child(2) {
                transform: rotate(90deg) translate(150px) rotate(-90deg);
            }
    
            :nth-child(3) {
                transform: rotate(180deg) translate(150px) rotate(-180deg);
            }
    
            :nth-child(4) {
                transform: rotate(270deg) translate(150px) rotate(-270deg);
            }
        }

        @media (min-width: 600px) and (min-height: 600px) {
            li {
                top: calc(50% - 40px);
                left: calc(50% - 40px);
    
                width: 80px;
                height: 80px;

                font-size: 1.5em;
    
                :nth-child(1) {
                    transform: rotate(0deg) translate(250px);
                }
        
                :nth-child(2) {
                    transform: rotate(90deg) translate(250px) rotate(-90deg);
                }
        
                :nth-child(3) {
                    transform: rotate(180deg) translate(250px) rotate(-180deg);
                }
        
                :nth-child(4) {
                    transform: rotate(270deg) translate(250px) rotate(-270deg);
                }
            }
        }
    }
`