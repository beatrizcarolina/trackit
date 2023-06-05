import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import checkVector from "../assets/check.png"

export default function DayHabit({habit, updateHabits}) {
    const { token, login, logout } = React.useContext(AuthContext);

    function handleHabit() {
        if (habit.done === false) {
            axios
                .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, "", 
                { headers: {"Authorization" : `Bearer ${token.token}`}})

                .then(() => {updateHabits()})

                .catch((error) => console.log(error));

            return;
        }

        axios
            .post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, "", 
            { headers: {"Authorization" : `Bearer ${token.token}`}})

            .then(() => {updateHabits()})

            .catch((error) => console.log(error));

        return;
    }

    return(
        <DayHabitContainer data-test="today-habit-container">
            <TodayHabit>
                <h1 data-test="today-habit-name">{habit.name}</h1>

                {   
                    habit.currentSequence !== undefined &&

                    <div>
                        <p data-test="today-habit-sequence">Sequência atual:{" "} 

                            <Habit status={habit.done? "true" : "false"} 
                                    highest={"false"}>
                                {habit.currentSequence === 1? `1 dia` : `${habit.currentSequence} dias`}
                            </Habit>

                        </p>

                        <p data-test="today-habit-record">Seu recorde:{" "}

                            <Habit highest={habit.currentSequence > 0 && 
                                    habit.currentSequence >= habit.highestSequence? "true" : "false"} 
                                    status={"false"}>
                                {habit.highestSequence === 1? `1 dia` : `${habit.highestSequence} dias`}
                            </Habit>

                        </p>

                    </div>
                }

            </TodayHabit>

            <Check onClick={handleHabit} 
                    status={habit.done? "true" : "false"} 
                    data-test="today-habit-check-btn">

                <img src={checkVector} alt="Check" />
            </Check>

        </DayHabitContainer>
    )
}

const DayHabitContainer = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    position: relative;
`

const TodayHabit = styled.div`
    h1 {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;       
    }
`

const Habit = styled.span`
    font-size: 13px;
        
    color: ${(props) => {
        if (props.status === "true" || props.highest === "true") {
            return "#8FC549";
        } 
            return "#666666";
        }};
`

const Check = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => {
        if (props.status === "true") {
            return "#8FC549";
        } 
            return "#EBEBEB";
        }};

    border: 1px solid ${(props) => {
        if (props.status === "true") {
            return "#8FC549";
        } 
            return "#E7E7E7";
        }};
        
    &:disabled {
        cursor: default;
    }
`