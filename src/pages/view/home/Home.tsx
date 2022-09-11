//navigate
import { useNavigate } from "react-router-dom";

//style
import { Header } from "./HomeStyle";
import { Next } from "./HomeStyle";
import { FiChevronsDown } from "react-icons/fi";

//components
import { Navbar } from "../../../components/home/Navbar";
import { Intro } from "./HomeStyle";

//img
//@ts-ignore
import dashvector from '../../../_assets/img/dashboard-vector.png';

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
       </>
    )
};

