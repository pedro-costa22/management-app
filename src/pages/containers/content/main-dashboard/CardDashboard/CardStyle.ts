import styled from "styled-components";

export const CardCont = styled.div<{background: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    background: ${props => props.background === 'orange' ? 
        'linear-gradient(270.01deg, #FF8EAB 12.82%, #FFBA95 99.99%)' 
        : 
        props.background === 'blue' ? 
        'linear-gradient(270.01deg, #399AE6 12.82%, #89C6F8 99.99%)' 
        : 
        'linear-gradient(270.01deg, #3CD8BF 12.82%, #7DD9D0 99.99%)'
    };

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        width: 40%;
    
        span {
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 6rem;
        }
    }

    .infos {
        display: flex;
        flex-direction: column;
        width: 60%;
        align-items: flex-end;
        padding-right: 28px;

        p {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: #fff;
            font-size: 1.1rem;
        }

        .value {
            font-size: 5rem;
        }
    }

    //Responsive
    @media screen and (max-width: 575.98px) {
        width: 100%;
        padding: 8px 128px;
        flex-direction: column;
        margin-right: 28px;
       
        .icon {
            width: 100%;
            span {
                font-size: 3.5rem;
            }
        }

        .infos {
            width: 100%;
            padding: 0px;
            align-items: center;
            p {
                font-size: .9rem;
                text-align: center;
            }

            .value {
                font-size: 1.8rem;
            }
        }
    }
    @media screen and (min-width: 576px) and (max-width: 767.98px) {
        flex-direction: column;
        .icon {
            width: 100%;
            span {
                font-size: 3.5rem;
            }
        }

        .infos {
            width: 100%;
            padding: 0px;
            align-items: center;
            p {
                font-size: .9rem;
                text-align: center;
            }

            .value {
                font-size: 1.8rem;
            }
        }
    }
    @media screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column;
        .icon {
            width: 100%;
            span {
                font-size: 3.5rem;
            }
        }

        .infos {
            width: 100%;
            padding: 0px;
            align-items: center;
            p {
                font-size: 1rem;
                text-align: center;
            }

            .value {
                font-size: 2rem;
            }
        }
    }
    @media screen and (min-width: 992px) and (max-width: 1199.98px) {
        flex-direction: column;
        .icon {
            width: 100%;
            span {
                font-size: 4rem;
            }
        }

        .infos {
            width: 100%;
            padding: 0px;
            align-items: center;
            p {
                font-size: 1rem;
                text-align: center;
            }

            .value {
                font-size: 2rem;
            }
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        .icon {
            span {
                font-size: 4rem;
            }
        }

        .infos {
            p {
                font-size: 1rem;
            }

            .value {
                font-size: 4rem;
            }
        }
    }

   
`;