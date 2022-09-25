import { AuthContext } from "context/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



export const Register = () =>{

    const contextAuth = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function register(name: string, email: string, password: string) {
        const registerAuth = await contextAuth.register(name, email, password);
        if(registerAuth.erro === true){
            return console.log('Usuário já cadastrado no sistema');
        }

        navigate('/main');
    }

    return (
        <div>

        <div className="form">

            <div className="name">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" value={name} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                />
            </div>

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

            <button onClick={() => register(name, email, password)}>Criar conta</button>
        </div>

       </div>
    )
};

