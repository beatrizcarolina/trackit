import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "./AuthContext";

export default function LoginForm() {
    const { token, login, logout } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const [disabled, setDisabled] = React.useState(false);
    
    const navigate = useNavigate();

    function handleLogin(event) {
        setDisabled(true);
        
        event.preventDefault();

        const data = {
            email: email,
            password: senha
        };

        axios  
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", data)

        .then((response) => {navigate("/hoje"); console.log("Sucesso"); login(response.data)})

        .catch((error) => { console.log(error); 
                            setDisabled(false); 
                            alert("Login falhou. Tente novamente!")});
    }


    return(
        <FormContainer>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="email" 
                    required 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}   
                    disabled={disabled} 
                    data-test="email-input"                    
                />

                <input 
                    type="password" 
                    placeholder="senha" 
                    required
                    onChange={(event) => setSenha(event.target.value)}
                    value={senha}  
                    disabled={disabled} 
                    data-test="password-input"
                />

               <button disabled={disabled} type="submit" data-test="login-btn">
                    { disabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !disabled &&
                        "Entrar"
                    }
               </button>

            </form>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    display: flex;
    justify-itens: center;
    align-itens: center;

    input{
        width: 303px;       
    }

    button{
        width: 303px;
        height: 45px;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
    }
`