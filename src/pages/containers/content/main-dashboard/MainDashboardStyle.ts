import styled from "styled-components";

export const DashboardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    padding: 0px 40px;
    position: relative;
    
    
`;

export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    margin-bottom: 14px;

    //responsive 
    @media screen and (max-width: 575.98px) {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }
`;

export const DashboardGraficts = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 44vh;
    margin-top: 14px;

    .bar {
        width: 60%;
    }

    .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        border: 1px solid yellow;
    }

`;