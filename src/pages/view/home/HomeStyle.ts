import styled from "styled-components";
//@ts-ignore
import backgroundHome from "../../../_assets/img/background-home.png";

export const Header = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundHome});
    background-repeat: no-repeat;
    background-position: right top;
  
`;

export const Intro = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 1270px;
    height: 100vh;


    .intro_text {
        font-size: 1.5rem;
        width: 600px;

        span {
            color: var(--color-secondary);
        }

        p {
            font-size: 1.2rem;
            margin: 5px 0;
        }

        button {
            font-size: 1.4rem;
            color: #fff;
            width: 320px;
            height: 50px;
            margin-top: 15px;
            background-color: var(--color-secondary);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            transition: all .3s;

            :hover {
                background-color: var(--color-primary);
            }
        }
    }

    .dashvector {
        position: absolute;
        right: 100px;

        img {
            width: 800px;
            
        }
    }

`;

export const Next = styled.div` 
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 20px;

    .icon_next {
        font-size: 2rem;
        color: var(--color-secondary);
        cursor: pointer;    
        animation: nextAnime 1s infinite;
    }

    @keyframes nextAnime {
        0%, 100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }
`;