import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";


export default function HabitsPage() {
    const { token, login, logout } = React.useContext(AuthContext);
    const [ habits, setHabits] = React.useState([]);

    React.useEffect(() => {
		axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                headers: {
                  Authorization: `Bearer ${token.token}`,
                },
              })

            .then(response => {setHabits(response.data)})

            .catch((error) => console.log(error));
	}, []);

    console.log(token);
    console.log(habits);


    return(
        <HabitsContainer>
            <NavBar></NavBar>

            <Main>
                <h3>Meus hábitos</h3>
                {habits.length == 0 &&
                    <h1>Você não tem nenhum hábito cadastrado ainda. 
                        Adicione um hábito para começar a trackear!</h1>}
            </Main>

            <Menu></Menu>
        </HabitsContainer>
    )
}

const HabitsContainer = styled.div`
    background-color: #E5E5E5;
    min-height: 100vh;
    display: flex;
    justify-content: center;
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