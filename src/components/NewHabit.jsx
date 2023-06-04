import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { ThreeDots } from "react-loader-spinner";
import DayButton from "./DayButton";

export default function NewHabit({cancelHabit, updateHabits}) {
    const { token, login, logout } = React.useContext(AuthContext);
    const [ disabled, setDisabled ] = React.useState(false);
    const [ habitName, setHabitName ] = React.useState("");
    const [ days, setDays ] = React.useState([]);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function saveHabits() {
        setDisabled(true);
        if (habitName !== "" && days.length !== 0) {
            const data = {
                name: habitName,
                days: days
            };

            if(token) {
                axios
                .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", 
                        data, 
                        { headers: {"Authorization" : `Bearer ${token.token}`}})

                .then(() => {updateHabits();})

                .catch((error) => {console.log(error); 
                                setDisabled(false); 
                                alert("Não foi possível salvar o seu hábito. Tente novamente!")});
            } else {
                alert("Faça login novamente!");
            }
           
        }
    }

    function saveDay(day) {
        const indexToRemove = days.indexOf(day);
    
        if (indexToRemove !== -1) {
            const updatedDays = [...days];
            updatedDays.splice(indexToRemove, 1);
            setDays(updatedDays);
            return;
        }
    
        setDays([...days, day]);
    }
    

    return(
        <HabitContainer data-test="habit-create-container">
             <input 
                type="text" 
                placeholder="nome do hábito" 
                required
                onChange={(event) => setHabitName(event.target.value)}
                value={habitName}  
                disabled={disabled} 
                data-test="habit-name-input"
            />
             <WeekDaysContainer>
                { weekDays.map((day, index) => (
                        <DayButton 
                            key={index} 
                            text={day}                  
                            disabled={disabled}
                            handleClick={saveDay}
                            day={index+1}
                            select={false}
                        ></DayButton>
                    ))
                }
            </WeekDaysContainer>
            <ButtonsContainer>
                <button disabled={disabled} onClick={cancelHabit} data-test="habit-create-cancel-btn">Cancelar</button>
                <button disabled={disabled} onClick={saveHabits} data-test="habit-create-save-btn">
                { disabled &&
                        <ThreeDots height="13px" color="#ffffff"></ThreeDots>
                    }
                    { !disabled &&
                        "Salvar"
                }
                </button>
            </ButtonsContainer>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    height: 180px;
    margin-left: 17px;
    margin-top: 20px;
    margin-bottom: 29px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 8px 18px;

    input{
        width: 100%;
        height: 45px;    
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        
        font-size: 20px;
        line-height: 25px;

        &::placeholder {
            color: #DBDBDB;
}
    }
`

const WeekDaysContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
   margin-bottom: 29px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: end;
    align-itens: center;
    gap: 23px;

    button:first-child {
        width: 69px;
        border-radius: 4.6px;
        background-color: #ffffff;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;

        &:disabled {
            cursor: default;
        }
    }

    button:nth-child(2) {
        width: 84px;
        height: 35px;
        border-radius: 4.6px;
        background-color: #52B6FF;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #ffffff;

        &:disabled {
            cursor: default;
        }
    }
`