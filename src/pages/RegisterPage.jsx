import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm"

export default function RegisterPage() {

    return(
        <PageContainer>
            <img src={logo} alt="Logo_TackIt" />

            <RegisterContainer>
                <RegisterForm />
            </RegisterContainer>

            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
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

const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

`