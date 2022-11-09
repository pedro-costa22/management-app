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
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 40%;

        div {
            width: 60%;
        }
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        flex-direction: column;
        overflow: auto;

        ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--color-secondary);
            border-radius: 5px;
        }
        
        .bar, .circle {
            width: 98%;
        }
        .labelDefault {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column;
        overflow: auto;

        ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--color-secondary);
            border-radius: 5px;
        }
        
        .bar, .circle {
            width: 98%;
        }
        .labelDefault {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column;
        overflow: auto;

        ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--color-secondary);
            border-radius: 5px;
        }
        
        .bar, .circle {
            width: 98%;
        }
        .labelDefault {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        flex-direction: column;
        overflow: auto;

        ::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--color-secondary);
            border-radius: 5px;
        }
        
        .bar, .circle {
            width: 98%;
        }
        .labelDefault {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1400px) {
        height: 30vh;
        .labelDefault {
            font-size: 1rem;
        }

    }

`;