//navigate
import { useNavigate } from "react-router-dom";

//style
import { Header } from "./HomeStyle";
import { Next } from "./HomeStyle";
import { FiChevronsDown } from "react-icons/fi";
import { Intro } from "./HomeStyle";
import { MainERP } from "./HomeStyle";

//components
import { Navbar } from "../../../components/home/Navbar";


//img
const dashvector = require('../../../_assets/img/dashboard-vector.png') as string;
const invetoryImg = require('../../../_assets/img/inventory_control.png') as string;
const globalDashboard = require('../../../_assets/img/global_dashboard.png') as string;

export const Home = () =>{

    const navigate = useNavigate();

    return (
       <>
        <Header>
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
                <img src={dashvector} />
            </div>
          </Intro>
        </Header>

        <Next>
            <FiChevronsDown className="icon_next"/>
        </Next>

        <MainERP>
            <h3 className="erp_title">ERP <span>Micro</span></h3>
            <div className="cont_img">
                <img src={invetoryImg} />
                <p>Cadastre seus produtos de acordo com suas necessidades</p>
            </div>

            <div className="cont_img dashimg">
                <p>Dashboard personalizado para sua empresa</p>
                <img src={globalDashboard} /> 
            </div>
        </MainERP>
       </>
    )
};

