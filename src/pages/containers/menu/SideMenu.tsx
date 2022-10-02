import { useNavigate, useParams } from 'react-router-dom'

//styles
import { BtnLogout, BtnMenuMobile, HeaderMenu, Menu, UserOptions } from './SideMenuStyle';

//icons
import { FaBoxOpen, FaCoins, FaUserFriends, FaLayerGroup, FaChartPie, FaCheckCircle, FaPowerOff } from "react-icons/fa";
import { FiSettings, FiEdit, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useContext, useEffect, useState } from 'react';

//utils
import { getUserLocalStorage } from 'context/AuthProvider/utils';
import { AuthContext } from 'context/AuthProvider/AuthProvider';

export const SideMenu = () =>{
    const contextUser = useContext(AuthContext);

    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [selected, setSelected] = useState({
        dashboard: true,
        inventory: false,
        financial: false,
        employee: false,
        projects: false,
        goals: false
    });
    
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
        <Menu active={openMenu}>
            <HeaderMenu>
                <h2>ERP Micro</h2>
            </HeaderMenu>

            <UserOptions>
                <div className='userImg'>
                    <label htmlFor='avatar'><FiEdit size={20}/></label>
                    <input type="file" name='avatar' id='avatar'/>
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
                    <div className='listItem' onClick={() => navigate("/main")}>
                        <span><FaChartPie className="iconList"/></span>
                        <p> Dashboard Gera</p>
                    </div>
                </li>

                <li className={`${selected.inventory ? 'selected' : ''}`} onClick={() => handleSelected('inventory')}>
                    <div className='listItem' onClick={() => navigate("/main/inventory-control")}>
                        <span><FaBoxOpen className='iconList'/></span>
                        <p> Controle de estoque</p>
                    </div>
                </li>

                <li className={`${selected.financial ? 'selected' : ''}`} onClick={() => handleSelected('financial')}>
                    <div className='listItem' onClick={() => navigate("/main/financial-control")}>
                        <span><FaCoins className='iconList'/></span>
                        <p> Controle Financeiro</p>
                    </div>
                </li>

                <li className={`${selected.employee ? 'selected' : ''}`} onClick={() => handleSelected('employee')}>
                    <div className='listItem' onClick={() => navigate("/main/employee-control")}>
                        <span><FaUserFriends className='iconList'/></span>
                        <p>Gestão de funcionarios</p>
                    </div>
                </li>

                <li className={`${selected.projects ? 'selected' : ''}`} onClick={() => handleSelected('projects')}>
                    <div className='listItem' onClick={() => navigate("/main/projects")}>
                        <span><FaLayerGroup className='iconList'/></span>
                        <p> Projetos</p>
                    </div>
                </li>
                
                <li className={`${selected.goals ? 'selected' : ''}`} onClick={() => handleSelected('goals')}>
                    <div className='listItem' onClick={() => navigate("/main/goals")}>
                        <span><FaCheckCircle className='iconList'/></span>
                        <p> Objetivos</p>
                    </div>
                </li>
            </ul>

            <BtnLogout>
                <FaPowerOff className="iconLogout"/>
                <p>Encerrar sessão</p>
            </BtnLogout>

            <BtnMenuMobile onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? 
                    <FiArrowLeft className='iconMenu'/> 
                    :
                    <FiArrowRight className='iconMenu'/>
                }
            </BtnMenuMobile>
        </Menu>
    )
};

