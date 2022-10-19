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
    justify-content: space-around;
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

                .nameCont {
                    display: flex;
                    justify-content: space-between;
                    position: relative;

                    label {
                        font-family: 'Poppins', sans-serif;
                        font-size: 1.2rem;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }

                    .errorName {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 228px;
                        height: 20px;
                        background-color: var(--error-color);
                        color: #fff;
                        border: 1px solid red;
                        top: 2px;
                        right: 0;
                        position: absolute;
                        font-size: .75rem;
                        text-align: center;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                        border-radius: 4px;
                        transition: all .3s;

                        ::after {
                            content: '';
                            background-color: transparent;
                            position: absolute;
                            bottom: -18px;
                            right: 0;
                            width: 2px;
                            height: 10px;
                            border-left: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-top: 8px solid var(--error-color);
                        }

                        @media screen and (max-width: 575.98px) {
                            width: 150px;
                            font-size: .55rem;
                        }
                    }
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
                        width: 90%;
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

    //Responsive 
    @media screen and (max-width: 575.98px) {
        width: 90%;
        height: 78%;
        margin-right: 48px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }
     

        .product {
            margin-top: 16px;

            .inputName {
                .nameCont {
                    label {
                        font-size: .9rem;
                    }

                    .errorName {
                        font-size: .6rem;
                        top: -22px;
                        width: 100%;
                        
                    }
                }
            }

            .qtd {
                margin-top: 16px;
                .inputMin, .inputMax, .inputCurrent {
                    label {
                        font-size: .9rem;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 90%;
        height: 70%;
        margin-right: 48px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }
     

        .product {
            margin-top: 16px;

            .inputName {
                .nameCont {
                    label {
                        font-size: 1rem;
                    }
                }
            }

            .qtd {
                margin-top: 16px;
                .inputMin, .inputMax, .inputCurrent {
                    label {
                        font-size: 1rem;
                    }
                }
            }
        }
       
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        width: 70%;
        height: 70%;
        margin-right: 48px;
     

        .product {
            margin-top: 16px;

            .inputName {
                .nameCont {
                    label {
                        font-size: 1rem;
                    }
                }
            }

            .qtd {
                margin-top: 16px;
                .inputMin, .inputMax, .inputCurrent {
                    label {
                        font-size: 1rem;
                    }
                }
            }
        }
       
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 70%;
        height: 100%;
        padding: 20px 20px;

        .modalHeader {
            h4 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }

        .product {
            margin-top: 16px;

            .inputName {
                .nameCont {
                    label {
                        font-size: 1rem;
                    }
                }
            }

            .qtd {
                margin-top: 16px;
                .inputMin, .inputMax, .inputCurrent {
                    label {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        width: 60%;

        .product {
            .inputName {
                .nameCont {
                    label {
                        font-size: 1.1rem;
                    }
                }
            }

            .qtd {
                .inputMin, .inputMax, .inputCurrent {
                    label {
                        font-size: 1.1rem;
                    }
                }
            }
        }

       
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
