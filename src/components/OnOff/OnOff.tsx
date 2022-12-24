import React from "react";


type OnOffType = {
    on: boolean
    setOnOff: (OnOff: boolean) => void
}

export const OnOffButton =  (props: OnOffType) => {


    const onStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor:  props.on ? "green" : "red"
    }

    const onClickHandler = (onOff: boolean) => {
        props.setOnOff(onOff)
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    )
}

