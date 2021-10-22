import React, {useState} from 'react'
import './login.css'
import { MdEmail, MdPassword } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";


const Login = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="login">

            <div className="logo">
            
            <img src="enter.png" alt="Login App"/>
            </div>
            <div className="login-right">
                <h1>Acessar</h1>
                <div className="login-email">
                    <MdEmail/>
                    <input
                        type="email"
                        placeholder="Insira seu E-Mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                </div>
                <div className="login-password">
                    <MdPassword/>
                    <input
                        type={show ? "text" : "password"}
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <div className="login-eye">
                            {show ? (
                                <HiEye
                                size={20}
                                onClick={handleClick}
                                />
                            ) :(<HiEyeOff
                            size={20}
                            onClick={handleClick}/>)}
                        </div>
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não tenho conta!</h4>

                <button type="submit">
                    Cadastrar
                </button>

            </div>
        </div>
    )
        
}

export default Login;