import styled from "styled-components";


export const SaleItemCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 48%;
    position: relative;
    margin-bottom: 8px;

    span {
        display: flex;
        align-items: center;
        width: 75%;
        background-color: #fff;
    }

    button {
        width: 24%;
        background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);

        :hover {
            background: radial-gradient(100% 559.5% at 100% 50%, #FF5271 0%, #FF5E5E 100%);
            transform: scale(1.01);
        }
    }
    

    @media screen and (max-width: 575.98px) {
        width: 98%;

        button {
            font-size: .9rem;
        }
       
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        width: 98%;

        button {
            font-size: .9rem;
        }

     
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        width: 98%;

        button {
            font-size: .9rem;
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        width: 98%;
        button {
            font-size: .9rem;
        }
    }
`;


