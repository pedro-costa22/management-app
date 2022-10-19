import styled from "styled-components";

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 8px 0px;

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

        span {
            display: flex;
            align-items: center;
            width: 100%;
            height: 48px;
            border-radius: 8px;
            outline: none;
            border: none;
            padding: 0px 20px;
            font-family: 'Poppins', sans-serif;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            position: relative;
            background-color: #fff;

        }
    }

    .inputMin, .inputMax, .inputCurrent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10%;

        span {
            display: flex;
            align-items: center;
            width: 100%;
            height: 48px;
            border-radius: 8px;
            outline: none;
            border: none;
            padding: 0px 8px;
            font-family: 'Poppins', sans-serif;
            font-size: .9rem;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            position: relative;
            background-color: #fff;


        }
    }

    .contAdd {
        display: flex;
        justify-content: space-between;
        width: 15%;

        label {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 4px;
            opacity: 0;
        }

        .btnEdit {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48%;
            height: 48px;

            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: bold;
            color: #fff;

            border: none;
            border-radius: 8px;
            background: linear-gradient(90deg, #CC81FF 0%, #A25CFF 100%);
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            cursor: pointer;
            transition: all .2s;

            
            :hover {
                transform: scale(1.04);
            }

        }

        .btnDelete {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48%;
            height: 48px;

            font-family: 'Poppins', sans-serif;
            font-size: 1.4rem;
            font-weight: bold;
            color: #fff;

            border: none;
            border-radius: 8px;
            background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            cursor: pointer;

            transition: all .2s;

            :hover {
                transform: scale(1.04);
            }
        }

    }

    //Responsive 
    @media screen and (max-width: 575.98px)  {
        flex-wrap: wrap;
        .inputName {
            width: 100%;
            margin-bottom: 6px;

            span {
                font-size: .8rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            width: 20%;

            span {
                font-size: .8rem;
            }
        }

        .contAdd {
            width: 34%;
            .btnEdit, .btnDelete {
                font-size: 1rem;
            }
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-wrap: wrap;
        .inputName {
            width: 100%;
            margin-bottom: 6px;

            span {
                font-size: .9rem;
            }
        }

        .inputMin, .inputMax, .inputCurrent {
            width: 20%;

            span {
                font-size: .9rem;
            }
        }

        .contAdd {
            width: 34%;
            .btnEdit, .btnDelete {
                font-size: 1.1rem;
            }
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        .contAdd {
            .btnEdit, .btnDelete {
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        .contAdd {
            .btnEdit, .btnDelete {
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        .contAdd {
            .btnEdit, .btnDelete {
                font-size: 1.2rem;
            }
        }
    }

`;