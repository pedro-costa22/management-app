import styled from "styled-components";

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding: 28px 28px;


    ul li {
        display: flex;
        align-items: center;
        list-style: none;
        cursor: pointer;
        transition: all .2s;
        margin: 8px 0px;
        border-radius: 12px;

        :hover {
            color: var(--color-secondary);
        }
        
        p {
            display: flex;
            align-items: center;
            padding: 12px 12px;
            list-style: none;
            cursor: pointer;
            transition: all .2s;

            font-family: "Poppins", sans-serif;
            font-size: 1.1rem;
            width: 100%;


            span {
                margin-right: 10px;
            }
        }
    }

    .selected {
        color: #fff;
        background: linear-gradient(270deg, #A15BFF 0%, #CE83FF 100%);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


        :hover {
            color: #fff;
        }
    }

`;

export const HeaderMenu = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    

    h2 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

`;

export const UserOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    height: 80px;
    background-color: var(--bg-layout);
    border-radius: 8px;
    margin: 28px 0px;

    .userImg {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: #fff;
 
    }

    .userInfos {
        width: 72%;
        display: flex;
        flex-direction: column;

        .nameUser {
            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            color: var(--text-grey);
            font-weight: 500;
        }

        .userFooter {
            display: flex;
            justify-content: space-between;

            p {
            font-family: 'Poppins', sans-serif;
            font-size: .8rem;
            color: var(--text-grey);
            font-weight: 500;
            }

            .btnTheme {
                cursor: pointer;
            }

        }

        

    }

`;

export const BtnLogout = styled.div`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    position: absolute;
    bottom: 48px;
    cursor: pointer;

    p {
        font-family: "Poppins", sans-serif;
        font-size: 1.1rem;
        margin-left: 10px;
    }

`;