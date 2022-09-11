//navigate
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';

//style
import { Nav } from "./NavbarStyle";
import { FiUserPlus } from "react-icons/fi";

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <Nav>
           <nav className="navbar">
            <Link to='' spy={true}  offset={0} duration={0} className="logo"> 
                    ERP<span> Micro</span>
                </Link>
            
                <ul>
                    <li>
                        <Link to='' spy={true}  offset={0} duration={0}> Início</Link>
                    </li>
                    <li>
                        <Link to='' spy={true}  offset={0} duration={0}> Nosso ERP</Link>
                    </li>
                    <li>
                        <Link to='' spy={true}  offset={0} duration={0}> Vantagens</Link>
                    </li>
                    <li>
                        <Link to='' spy={true}  offset={0} duration={0}> Quem somos ?</Link>
                    </li>
                    <li>
                        <a onClick={() => navigate('/login')} className="login">Entrar</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/register')} className="register">
                            <FiUserPlus className="plus_Icon"/> 
                            Cadastrar
                        </a>
                    </li>
                </ul>
           </nav>


        </Nav>
    )
}