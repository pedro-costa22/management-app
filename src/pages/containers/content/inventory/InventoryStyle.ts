import styled from "styled-components";


export const InventoryCont = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    padding: 0px 40px;
    position: relative;

    //Responsive 
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        height: 60vh;
    }
    

`;

export const HeaderInventory = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    margin-bottom: 28px;

    .inputName {
        display: flex;
        flex-direction: column;
        width: 52%;

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

            :focus {
                outline: 1px solid;
                outline-color: rgb(84 105 212 / 0.5);
            }

        }
    }

    .inputMin, .inputMax, .inputCurrent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10%;

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
            padding: 0px 8px;
            font-family: 'Poppins', sans-serif;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            position: relative;

            :focus {
                outline: 1px solid;
                outline-color: rgb(84 105 212 / 0.5);
            }

        }
    }

    .contAdd {
        display: flex;
        flex-direction: column;
        width: 15%;

        label {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 4px;
            opacity: 0;
        }

        .btnAddProduct {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 48px;

            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            font-weight: 500;
            color: #fff;

            border: none;
            border-radius: 8px;
            background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            cursor: pointer;

            .iconAdd {
                margin-right: 6px;
            }
        }

    }

    //Responsive 

    @media screen and (max-width: 575.98px) {
        flex-wrap: wrap;

        .inputName {
            width: 100%;
            margin-bottom: 8px;
            
            label {
                font-size: .9rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            width: 20%;

            label {
                font-size: .9rem;
            }
        }

        .contAdd {
            width: 28%;

            label {
                font-size: .9rem;
            }
            .btnAddProduct {
                font-size: .8rem;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        .inputName {
            width: 45%;

            label {
                font-size: .9rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            label {
                font-size: .9rem;
            }
        }

        .contAdd {
            width: 18%;

            label {
                font-size: .9rem;
            }
            .btnAddProduct {
                font-size: .8rem;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        .inputName {
            width: 50%;

            label {
                font-size: 1rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            label {
                font-size: 1rem;
            }
        }

        .contAdd {
            label {
                font-size: 1rem;
            }
            .btnAddProduct {
                font-size: .8rem;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .inputName {
            width: 50%;

            label {
                font-size: 1rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            label {
                font-size: 1rem;
            }
        }

        .contAdd {
            label {
                font-size: 1rem;
            }
            .btnAddProduct {
                font-size: .875rem;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .inputName {
            width: 50%;

            label {
                font-size: 1.1rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            label {
                font-size: 1.1rem;
            }
        }

        .contAdd {
            label {
                font-size: 1.1rem;
            }
            .btnAddProduct {
                font-size: 1rem;
            }
        }
    }


`;

export const InventoryItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-top: 3px solid #fff;

    overflow: auto;
    ::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary);
        border-radius: 5px;
    }
    

    .itemsTitle {
        margin: 28px 0px 4px 0px;

        h3 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 4px;
        }
    }

    .items {
        display: flex;
        flex-direction: column-reverse;
        padding-right: 10px;
    }

    //Responsive 
    @media screen and (max-width: 575.98px) {
        margin-top: 48px;

        .itemsTitle {
            h3 {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        .itemsTitle {
            h3 {
                font-size: .9rem;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        .itemsTitle {
            h3 {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .itemsTitle {
            h3 {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .itemsTitle {
            h3 {
                font-size: 1.1rem;
            }
        }
    }

`;