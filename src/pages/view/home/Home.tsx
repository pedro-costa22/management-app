//navigate
import { useNavigate } from "react-router-dom";

//style
import { Header } from "./HomeStyle";
import { Next } from "./HomeStyle";
import { FiChevronsDown } from "react-icons/fi";
import { Intro } from "./HomeStyle";
import { MainERP } from "./HomeStyle";
import { Details } from "./HomeStyle";
import { FiTool, FiMessageCircle, FiTrello, FiLock, FiBell, FiMousePointer } from "react-icons/fi";

//components
import { Navbar } from "./Navbar/Navbar";

//img
import dash_vector from '../../../assets/img/dashboard-vector.png';
import inventory_control from '../../../assets/img/inventory_control.png';
import global_dashboard from '../../../assets/img/global_dashboard.png';


export const Home = () =>{

  const navigate = useNavigate();

  return (
    <>
      <Header id="home">
        <Navbar />
          <Intro>
            <div className="intro_text">
              <h2>
                O controle <span>total</span> da sua 
                <span> empresa</span> com apenas alguns clicks!
              </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Ea suscipit ipsam nostrum recusandae deserunt quis iure ipsum.
                </p>
                <button onClick={() => navigate('/register')}>Acesse nosso ERP</button>
            </div>

            <div className="dashvector">
              <img src={dash_vector} alt="Vetor dashboard" />
            </div>
          </Intro>
      </Header>

      <Next>
        <FiChevronsDown className="icon_next"/>
      </Next>

      <MainERP id="erp">
        <h3 className="erp_title">ERP <span>Micro</span></h3>
        <div className="cont_img">
          <img src={inventory_control} alt="Ilustração cadastro de produto"/>
          <p>Cadastre seus produtos de acordo com suas necessidades</p>
        </div>

        <div className="cont_img dashimg">
          <p>Dashboard personalizado para sua empresa</p>
          <img src={global_dashboard} alt="Ilustração Dashboard" />
        </div>
      </MainERP>

      <Details id="advantage">
        <h2>Vantagens de utilizar nosso <span>ERP</span></h2>

        <div className="advantage">
            <div className="advantage_title">
                <FiTool className="advantage_icon lilas" /> 
                <p className="lilas">Controle</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
            <div className="advantage_title">
                <FiMessageCircle className="advantage_icon blue" /> 
                <p className="blue">Suporte</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
            <div className="advantage_title">
                <FiTrello className="advantage_icon green" /> 
                <p className="green">Dashboard</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
            <div className="advantage_title">
                <FiLock className="advantage_icon lilas" /> 
                <p className="lilas">Segurança</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
        <div className="advantage_title">
                <FiBell className="advantage_icon blue" /> 
                <p className="blue">Alertas</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
        <div className="advantage_title">
                <FiMousePointer className="advantage_icon green" /> 
                <p className="green">Usabilidade</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>
      </Details>
      
    </>
  )
};

