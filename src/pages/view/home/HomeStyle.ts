import styled from "styled-components";
const backgroundHome = require('../../../_assets/img/background-home.png') as string;

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
        width: 600px;
        h2 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2.2rem;
            color: var(--text);
        }

        span {
            color: var(--color-secondary);
        }

        p {
            font-size: 1.2rem;
            margin: 5px 0;
        }

        button {
            text-transform: uppercase;
            font-size: 1.1rem;
            font-weight: 500;
            letter-spacing: 1px;
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


export const MainERP = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1120px;
    margin: 0 auto;
    height: 100vh;
    position: relative;

    .erp_title {
        font-size: 2.2rem;
        margin-bottom: 60px;
        color: var(--text);

        span {
            color: var(--color-primary);
        }
    }

    .cont_img {
        display: flex;
        flex-direction: column;
        width: 100%;

        img {
            width: 800px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        }

        p {
            font-size: 1.4rem;
            font-weight: 500;
            margin: 15px 0;
            max-width: 300px;
            color: var(--text);
        }
    }

    .dashimg {
        display: flex;
        align-items: flex-end;
        position: absolute;
        top: 380px; 
    }

`;