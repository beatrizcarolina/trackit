import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";

export default function TodayPage() {
    const { token, login, logout } = React.useContext(AuthContext);
    const [ dayHabits, setDayHabits] = React.useState([]);

    React.useEffect(() => {
		axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
                headers: {
                  Authorization: `Bearer ${token.token}`,
                },
              })

            .then(response => {setDayHabits(response.data)})

            .catch((error) => console.log(error));
	}, []);

    console.log(token);
    console.log(dayHabits);

    return(
        <TodayContainer>
             
                <NavBar></NavBar>

                <Menu></Menu>           
            
        </TodayContainer>     
    )  
}

const TodayContainer = styled.div `
    background-color: #E5E5E5;
    min-height: 100vh;
    display: flex;
    justify-content: center;

`