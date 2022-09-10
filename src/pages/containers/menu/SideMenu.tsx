import { useNavigate } from 'react-router-dom'


export const SideMenu = () =>{

    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <p onClick={() => navigate("/main")}>Dashboard Geral</p>
                </li>
                <li>
                    <p onClick={() => navigate("/main/inventory-control")}>Controle de estoque</p>
                </li>
                <li>
                    <p onClick={() => navigate("/main/financial-control")}>Controle Financeiro</p>
                </li>
                <li>
                    <p onClick={() => navigate("/main/employee-control")}>Gestão de funcionarios</p>
                </li>
                <li>
                    <p onClick={() => navigate("/main/projects")}>Projetos</p>
                </li>
                <li>
                    <p onClick={() => navigate("/main/goals")}>Objetivos</p>
                </li>
            </ul>
        </nav>
    )
};

