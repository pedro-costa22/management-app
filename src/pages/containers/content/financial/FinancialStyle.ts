import styled from "styled-components";


export const FinancialCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 58vh;
    padding: 0px 40px;
    position: relative;
`;

export const AddFinancialCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    .column {
        width: 48%;
    }

    @media screen and (max-width: 575.98px) {
        flex-direction: column;

        .column {
            width: 100%;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column;

        .column {
            width: 100%;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
       flex-direction: column;

       .column {
            width: 100%;
        }
    }
 

`;

export const Sales = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 28px;
    border-top: 3px solid #fff;

    @media screen and (max-width: 575.98px) {
        height: 40vh;
       
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        height: 40vh;
     
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px)  {
        height: 40vh;
    }
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        height: 40vh;
    }


`;

export const SalesItems = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 50%;
    margin-top: 28px;

    overflow: auto;
    ::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-secondary);
        border-radius: 5px;
    }

`;