import styled from "styled-components";
import React from "react";
import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import NavBar from "../components/NavBar";
import TodayDate from "../components/TodayDate";
import Menu from "../components/Menu";
import DayHabit from "../components/DayHabit";

export default function TodayPage() {
    const { token, login, logout } = React.useContext(AuthContext);
    const [ dayHabits, setDayHabits] = React.useState([]);

    function updateProgress(todayHabits) {
      let total = 0;
      todayHabits.forEach((habit) => {
          if(habit.done === true) {
              total++;
          }
      })
      const newProgress = Math.round(total/todayHabits.length*100);
      login({...token, progress: newProgress});
  }

    React.useEffect(() => {
        getDayHabits();  
	}, []);

    function getDayHabits() {
      if(token) {
        axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          })

        .then(response => {setDayHabits(response.data); updateProgress(response.data)})

        .catch((error) => console.log(error));
      }   
    }

    console.log(token);
    console.log(dayHabits);

    return(
        <TodayContainer>
             
                <NavBar></NavBar>

                <Header>
                  <TodayDate></TodayDate>
                  <ProgressContainer progress={token.progress} data-test="today-counter">
                    {token.progress === 0 || isNaN(token.progress)? `Nenhum hábito concluído ainda` : `${token.progress}% dos hábitos concluídos`}
                  </ProgressContainer>
                </Header>

                <Habit>
                  {
                      dayHabits.length !== 0 &&
                      dayHabits.map((dayHabit, index) => (
                        <DayHabit key={index}
                                  habit={dayHabit}
                                  updateHabits={getDayHabits}                      
                        ></DayHabit>
                      ))
                    }
                </Habit>

                <Menu></Menu>           
            
        </TodayContainer>     
    )  
}

const TodayContainer = styled.div `
  background-color: #E5E5E5;
  width: 375px;
  min-height: 100vh;
  margin-top: 70px;

`
const Header = styled.div`
  padding: 28px 17px;
   
  h2 {
    font-size: 23px;
    color: #126BA5;
  }
`

const ProgressContainer = styled.p`
  font-size: 18px;
  margin-top: 5px;

  color: ${(props) => {
      if (props.progress === 0 || isNaN(props.progress)) {
          return "#BABABA";
      } 
      return "#8FC549";
  }};
`

const Habit = styled.div`
  margin-left: 17px;
`