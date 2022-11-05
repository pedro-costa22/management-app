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

    //responsive 
    @media screen and (max-width: 575.98px) {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }
`;