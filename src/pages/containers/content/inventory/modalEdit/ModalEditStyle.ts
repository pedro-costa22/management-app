import styled from "styled-components";

export const ModalCont = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    height: 100%;
    z-index: 999;
    position: absolute;
    backdrop-filter: blur(1px);
`;

export const ModalOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 80%;
    padding: 28px 28px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 9999;

       //header modal
       .modalHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;

        h4 {
            font-family: "Poppins", sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 2px;
        }

        p {
            font-family: "Poppins", sans-serif;
            font-size: .9rem;
            font-weight: 500;
            color: var(--text-grey);
        }

        .exitIcon {
            font-size: 2rem;
            cursor: pointer;
            transition: all .2s;

            :hover {
                color: var(--color-secondary);
            }
        }
        }

        //product
        .product {
            display: flex;
            flex-direction: column;
            margin-top: 28px;
            width: 100%;

            .inputName {
                display: flex;
                flex-direction: column;
                width: 100%;

                label {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 500;
                    margin-bottom: 4px;
                }

                input {
                    width: 100%;
                    height: 48px;
                    border-radius: 8px;
                    outline: none;
                    border: none;
                    padding: 0px 20px;
                    font-family: 'Poppins', sans-serif;
                    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
                    position: relative;
                    outline: 1px solid;
                    outline-color: rgb(84 105 212 / 0.5);
                }
            }

            .qtd {
                display: flex;
                justify-content: space-between;
                width: 100%;
                margin-top: 28px;

                .inputMin, .inputMax, .inputCurrent {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    label {
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.2rem;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }

                    input {
                        width: 100%;
                        height: 48px;
                        border-radius: 8px;
                        outline: none;
                        border: none;
                        padding: 0px 20px;
                        font-family: 'Poppins', sans-serif;
                        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
                        position: relative;
                        outline: 1px solid;
                        outline-color: rgb(84 105 212 / 0.5);
                    }
                }
            }

        }   

        .response {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 88px;
            margin: 28px 0px;
        }
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 8px;

    font-family: 'Poppins', sans-serif;
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
           
    background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all .3s;
    outline: none;

    :hover {
        background: linear-gradient(90deg, #AF53EE 0%, #8A35FB 100%);
    }

`;
