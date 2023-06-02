import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


export default function RegisterForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [picture, setPicture] = React.useState("");

    const [disabled, setDisabled] = React.useState(false);
    
    const navigate = useNavigate();


    function register(event) {

        setDisabled(true);
        
        event.preventDefault();

        const data = {
            email: email,
            name: name,
            image: picture,
            password: password
        };

        axios  
        .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", data)

        .then(() => {navigate("/")})

        .catch((error) => { console.log(error); 
                            setDisabled(false); 
                            alert("O cadastro falhou. Tente novamente!")});
    }


    return(
        <FormContainer>
            <form onSubmit={register}>
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
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}  
                    disabled={disabled}
                    data-test="password-input"
                />

                <input 
                    type="text" 
                    placeholder="nome" 
                    required 
                    onChange={(event) => setName(event.target.value)}
                    value={name}  
                    disabled={disabled}   
                    data-test="user-name-input"                  
                />

                <input 
                    type="URL" 
                    placeholder="foto" 
                    required 
                    onChange={(event) => setPicture(event.target.value)}
                    value={picture}  
                    disabled={disabled}    
                    data-test="user-image-input"                 
                />

               <button disabled={disabled} type="submit" data-test="signup-btn">
                    { disabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !disabled &&
                        "Cadastrar"
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