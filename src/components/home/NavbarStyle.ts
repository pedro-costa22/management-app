import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    position: absolute;
    
    
    .navbar {
        display: flex;
        justify-content: space-between;
        width: 1340px;
        align-items: center;
        
        
        .logo {
            font-size: 1.8rem;
            font-weight: 500;
            color: #000;
            cursor: pointer;

            span {
                color: var(--color-secondary);
            }
        }

        ul{
            
            display: inline-flex;

            li {
                
                list-style: none;
                cursor: pointer;

                a {
                    font-size: 1.2rem;
                    color: #000;
                    font-weight: 500;
                    padding: 0 15px;
                    transition: all .3s;
                    position: relative;

                   :hover {
                    color: var(--color-secondary);
                   }
                }
            }
        }

        .login {
            color: #f9f9f9;
            transition: all .3s;

            :hover {
                color: #000;
            }

            margin-left: 10px;
        }

        .register {
            display: flex;
            align-items: center;
            color: #f9f9f9;
            transition: all .3s;

            :hover {
                color: #000;
            }

            .plus_Icon {
                margin-right: 5px;
            }
        
        }
    }

    

`;