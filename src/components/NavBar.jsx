import styled from "styled-components";
import React from "react";
import { AuthContext } from "./AuthContext";


export default function NavBar() {
    const { token, login, logout } = React.useContext(AuthContext);

    return(
        <HeaderContainer data-test="header">
            <h1>TrackIt</h1>
            {token &&
                <img src={token.image} data-test="avatar"/> }        
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-itens: center;
    position: fixed;
    z-index: 1;


    h1{
        margin-top: 10px;
        margin-left: 18px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;  
    }

    img{
        width: 51px;
        height: 51px;
        margin-rigth: 10px;
        margin-top: 9px;
        margin-right: 18px;
        border-radius: 98.5px;
    }
`