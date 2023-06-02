import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import logo from "../assets/logo.png"

export default function LoginPage() {

    return(
        <PageContainer>
            <img src={logo} alt="Logo_TackIt" />

            <LoginContainer>
                <LoginForm />
            </LoginContainer>

            <Link to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </PageContainer>
    )
}

const PageContainer = styled.div`

    width: 100vw;
	height: 100vh;

	> img {
		margin: 10vh calc(50vw - 91px) 5vh;
	}

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 30px;
        cursor: pointer;
    }

`

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

`