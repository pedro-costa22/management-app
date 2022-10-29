import styled from "styled-components";

export const MonthlyCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 148px;

    input {
        padding-left: 40px;
    }

    .btns {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        button {
            width: 48%;
            :hover {
                transform: scale(1.01);
            }
        }

        .delete {
            background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);
        }
    }

    .inputValue {
        display: flex;
        position: relative;

        span {
            position: absolute;
            z-index: 2;
            padding-left: 20px;
            top: 13px;
            font-family: 'Poppins', sans-serif;
            font-size: .875rem;
        }
    }

    @media screen and (max-width: 575.98px) {
        height: 168px;
        label {
            font-size: 1rem;
        }

        button {
            margin-bottom: 8px;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        label {
            font-size: 1rem;
        }

        button {
            margin-bottom: 8px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        label {
            font-size: 1rem;
        }

        button {
            margin-bottom: 8px;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        label {
            font-size: .875rem;
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        label {
            font-size: 1.1rem;
        }
    }
`;