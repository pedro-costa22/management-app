import { AuthContext } from "context/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () =>{

    const navigate = useNavigate();
    const contextAuth = useContext(AuthContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function login(email: string, password: string) {
        const loginAuthenticate = await contextAuth.authenticate(email, password);
        if(loginAuthenticate.erro === true){
            return console.log('Uusário errado, tratar o front aqui');
        }

        return navigate('/main');
    };

    /* AGORA FALTA FAZER O CADASTRO SEM ESTILIZAÇÃO POR ENQUANTO
    ARRUMAR A QUESTÃO DO LOOP INFINITO QUE ESTÁ OCORRENDO AO SETAR OS VALORES NO USER
    E CRIAR O LAYOUTPROECT, QUANDO ISSO ESTIVER FUNCIONANDO É SO ESTILIZAR PARA FINALIZAR */


    return (
       <div>

        <div className="form">
            <div className="email">
                <label htmlFor="email">E-mail:</label>
                <input type="text" name="email" value={email} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </div>

            <div className="password">
                <label htmlFor="password">Senha:</label>
                <input type="text" name="password" value={password} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={() => login(email, password)}>Logar</button>
        </div>

       </div>
    )
};

