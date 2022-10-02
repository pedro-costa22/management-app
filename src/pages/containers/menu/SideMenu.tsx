import { useNavigate, useParams } from 'react-router-dom'

//styles
import { BtnLogout, HeaderMenu, Menu, UserOptions } from './SideMenuStyle';

//icons
import { FaBoxOpen, FaCoins, FaUserFriends, FaLayerGroup, FaChartPie, FaCheckCircle, FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { useContext, useEffect, useState } from 'react';

//utils
import { getUserLocalStorage } from 'context/AuthProvider/utils';
import { AuthContext } from 'context/AuthProvider/AuthProvider';

export const SideMenu = () =>{

    const navigate = useNavigate();
    const [selected, setSelected] = useState({
        dashboard: true,
        inventory: false,
        financial: false,
        employee: false,
        projects: false,
        goals: false
    });
    const contextUser = useContext(AuthContext);

    const handleSelected = (selectorPage: string) => {
        setSelected(prevState => ({
            ...prevState,
            dashboard: false,
            inventory: false,
            financial: false,
            employee: false,
            projects: false,
            goals: false
        }));

        setSelected(prevState => ({
            ...prevState,
            [selectorPage]: true,
        }));
    }


    return (
        <Menu>
            <HeaderMenu>
                <h2>ERP Micro</h2>
            </HeaderMenu>

            <UserOptions>
                <div className='userImg'>
                    
                </div>
                <div className='userInfos'>
                    <p className='nameUser'>{contextUser.name}</p>
                    <div className='userFooter'>
                        <p>Empresa S/A </p>
                        <span className='btnTheme'><FiSettings size={16}/></span> 
                    </div>
                        

                </div>
            </UserOptions>


            <ul>
                <li className={`${selected.dashboard ? 'selected' : ''}`} onClick={() => handleSelected('dashboard')}> 
                    <p onClick={() => navigate("/main")}> 
                        <span><FaChartPie size={14}/></span> Dashboard Gera
                    </p>
                </li>
                <li className={`${selected.inventory ? 'selected' : ''}`} onClick={() => handleSelected('inventory')}>
                    <p onClick={() => navigate("/main/inventory-control")}> 
                        <span><FaBoxOpen size={14}/></span> Controle de estoque
                    </p>
                </li>
                <li className={`${selected.financial ? 'selected' : ''}`} onClick={() => handleSelected('financial')}>
                    <p onClick={() => navigate("/main/financial-control")}> 
                        <span><FaCoins size={14}/></span> Controle Financeiro
                    </p>
                </li>
                <li className={`${selected.employee ? 'selected' : ''}`} onClick={() => handleSelected('employee')}>
                    <p onClick={() => navigate("/main/employee-control")}> 
                        <span><FaUserFriends size={14}/></span> Gestão de funcionarios
                    </p>
                </li>
                <li className={`${selected.projects ? 'selected' : ''}`} onClick={() => handleSelected('projects')}>
                    <p onClick={() => navigate("/main/projects")}> 
                        <span><FaLayerGroup size={14}/> </span> Projetos
                    </p>
                </li>
                <li className={`${selected.goals ? 'selected' : ''}`} onClick={() => handleSelected('goals')}>
                    <p onClick={() => navigate("/main/goals")}> 
                        <span><FaCheckCircle size={14}/></span> Objetivos
                    </p>
                </li>
            </ul>

            <BtnLogout>
                <FaPowerOff size={18}/>
                <p>Encerrar sessão</p>
            </BtnLogout>
        </Menu>
    )
};

