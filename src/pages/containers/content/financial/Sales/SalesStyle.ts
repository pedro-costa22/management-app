import styled from "styled-components";


export const SalesCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    position: relative;

    label {
        margin: 8px 0px;
    }

    .salesItems {
        display: flex;
        justify-content: space-between;

        input {
            width: 75%;
        }

        button {
            width: 24%;
        }
    }

    @media screen and (max-width: 575.98px) {
        label {
            font-size: 1.1rem;
        }
        width: 100%;

        button {
            font-size: .9rem;
        }
       
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        label {
            font-size: 1.1rem;
        }
        width: 100%;

        button {
            font-size: .9rem;
        }

     
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        label {
            font-size: 1.1rem;
        }

        button {
            font-size: .9rem;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        label {
            font-size: 1.1rem;
        }

        button {
            font-size: .9rem;
        }
    }
`;


