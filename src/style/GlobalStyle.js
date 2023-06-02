import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;     
    }

    html{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }
    
    button {
        background: #52B6FF;
        border-radius: 5px;
        border-style: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        
    }
    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        margin-bottom: 6px;
        margin-top: 10px;
        padding: 0 10px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        display: flex;
        align-items: center;
        &::placeholder{
            font-style: italic;
        }
        
    }
`