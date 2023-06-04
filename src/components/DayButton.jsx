import styled from "styled-components";
import React from "react";

export default function DayButton({text, disabled, handleClick, day, select}) {
    const [ selected, setSelected ] = React.useState(select);

    function toggleSelected(){
        setSelected(!selected);
        handleClick(day);
    }

    return(
        <DayWeekButton disabled={disabled} selected={selected} onClick={toggleSelected} data-test="habit-day">
            {text}
        </DayWeekButton>
    )
}

const DayWeekButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    
    background-color: ${(props) => {
        if (props.selected === true) {
            return "#CFCFCF";
        } 
        return "#FFFFFF";
    }};

    border: 1px solid ${(props) => {
        if (props.selected === true) {
            return "#CFCFCF";
        } 
        return "#D5D5D5";
    }};

    color: ${(props) => {
        if (props.selected === true) {
            return "#FFFFFF";
        } 
        return "#DBDBDB";
    }};
`