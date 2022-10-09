import { useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';

//styles
import { BtnLogout, BtnMenuMobile, HeaderMenu, Menu, UserOptions } from './SideMenuStyle';

//icons
import { FaBoxOpen, FaCoins, FaUserFriends, FaLayerGroup, FaChartPie, FaCheckCircle, FaPowerOff } from "react-icons/fa";
import { FiSettings, FiUser, FiArrowRight, FiArrowLeft } from "react-icons/fi";


//utils
import { getUserLocalStorage } from 'context/utils/utils';
import { AuthContext } from 'context/AuthProvider/AuthProvider';


//modal
import { UserConfigContext } from 'context/ConfigModal/ConfigModal';


export const SideMenu = () =>{
    const contextUser = useContext(AuthContext);
    const userConfig = useContext(UserConfigContext);
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
    const [user, setUser] = useState({
        userName: getUserLocalStorage().name,
        userProfile: getUserLocalStorage().profile
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

    useEffect(() => {
        setUser(prevState => ({
            ...prevState,
            userName: getUserLocalStorage().name,
            userProfile: getUserLocalStorage().profile
        }))

    }, [getUserLocalStorage()])


    return (
        <Menu active={openMenu}>
            <HeaderMenu>
                <h2>ERP Micro</h2>
            </HeaderMenu>

            <UserOptions>
                <div className='userImg'>
                    <span>
                        {contextUser.profile !== '' ? 
                            <img className='userProfile' src={user.userProfile} alt="profile user"/>
                        : 
                            <FiUser className='userProfileIcon'/>
                        }
                    </span>

                </div>
                <div className='userInfos'>
                    <p className='nameUser'>{user.userName}</p>
                    <div className='userFooter'>
                        <p>Empresa S/A </p>
                        <span className='btnTheme'><FiSettings className='btnConfig' onClick={() => userConfig.setOpenModal(true)}/></span> 
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

