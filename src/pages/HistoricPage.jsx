import styled from "styled-components";
import React from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

export default function HistoricPage(){

    return(
        <HistoricContainer>
            <NavBar></NavBar>

            <Main>
                <h3>Histórico</h3>
                <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
            </Main>

            <Menu></Menu>
        </HistoricContainer>
    )
}

const HistoricContainer = styled.div`
    background-color: #E5E5E5;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;

`

const Main = styled.div`
   

    h3{
        heigth: 29px;
        margin-left: 17px;
        margin-top: 98px;
        font-size: 26px;
        line-height: 29px;  
        color: #126BA5;   
    }

    h1{
        height: 74px;
        margin-left: 15px;
        margin-top: 17px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`