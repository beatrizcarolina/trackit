import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import NewHabit from "../components/NewHabit";
import Habit from "../components/Habit";


export default function HabitsPage() {
    const { token, login, logout } = React.useContext(AuthContext);
    const [ habits, setHabits] = React.useState([]);
    const [ addNewHabit, setAddNewHabit] = React.useState(false);
    const [ habitName, setHabitName ] = React.useState("");
    const [ days, setDays ] = React.useState([]);
    
    React.useEffect(() => {
        if(token) {
            getHabits();
        }
		
	}, []);


    function toggleNewHabit() {
        setAddNewHabit(!addNewHabit);
    }

    function getHabits() {
        cancelHabit();
        setDays([]);
        setHabitName("");

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
                headers: {
                  Authorization: `Bearer ${token.token}`,
                },
              })

            .then(response => {setHabits(response.data)})

            .catch((error) => console.log(error));
    }

    function cancelHabit() {
        setAddNewHabit(false);
    }


    return(
        <HabitsContainer>
            <NavBar></NavBar>

            <Main>
                <Header>
                    <h3>Meus hábitos</h3>
                    <button onClick={toggleNewHabit} data-test="habit-create-btn">+</button>
                </Header>
                {   
                    addNewHabit &&
                    <NewHabit
                        cancelHabit={cancelHabit}
                        updateHabits={getHabits}
                        days={days}
                        setDays={setDays}
                        habitName={habitName}
                        setHabitName={setHabitName}
                    ></NewHabit>
                }
                {
                    habits.length == 0 &&
                        <h1>Você não tem nenhum hábito cadastrado ainda. 
                        Adicione um hábito para começar a trackear!</h1>
                }
                {
                    habits.length > 0 &&
                        habits.map((habit, index) => (
                            <Habit
                                key={index}
                                habit={habit}
                                updateHabits={getHabits}
                            ></Habit>
                            
                        ))
                }

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
    width: 375px;
    h1{
        height: 74px;
        margin-left: 15px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

const Header = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 98px;
    margin-bottom: 10px;

    h3{
        margin-left: 17px;
        font-size: 26px;
        line-height: 29px;  
        color: #126BA5;   
    }

    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        font-size: 27px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        position: relative;
        margin-right: 17px;
    }
`