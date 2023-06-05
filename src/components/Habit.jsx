import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import DayButton from "./DayButton";

export default function Habit({habit, updateHabits}) {
    const { token, login, logout } = React.useContext(AuthContext);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit() {
        console.log("função deleteHabit");
        if(confirm("Deseja excluir esse hábito?")) {
            axios
                .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, 
                        { headers: {"Authorization" : `Bearer ${token.token}`}})

                .then(() => {updateHabits(); console.log("hábito deletado")})

                .catch((error) => console.log(error));
        }
    }

    console.log(habit);

    return(
        <Container data-test="habit-container">

             <h3 data-test="habit-name">{habit.name}</h3>

             <HabitContainer>
             {
                weekDays.map((day, index) => {
                    if(habit.days.indexOf(index) !== -1) {
                        return <DayButton key={index} 
                                          text={day}  
                                          disabled={true} 
                                          select={true} 
                                ></DayButton>
                    }
                    return <DayButton key={index} 
                                    text={day} 
                                    disabled={true} 
                                    select={false}
                            ></DayButton>
                })
            }

             </HabitContainer>

            <ion-icon name="trash-outline" onClick={deleteHabit} data-test="habit-delete-btn"></ion-icon>

        </Container>
    );
}

const Container = styled.div`
    height: 91px;
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 15px;
    position: relative;

    h3{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    ion-icon{
        top: 11px;
        right: 10px;
        cursor: pointer;
        position: absolute;
    }  
`

const HabitContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`

