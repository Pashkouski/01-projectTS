import React, {useState} from "react";




export const OnOffButton =  () => {

    const [OnOff, setOnOff] = useState(false)

    const onStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: OnOff ? "green" : "white"
    }
    const offStyle = {
        width: '25px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor: !OnOff ? "red" : "white"
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: "5px",
        backgroundColor:  OnOff ? "green" : "red"
    }

    const onClickHandler = (onOff: boolean) => {
       setOnOff(onOff)
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>On</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}>Off</div>
            <div style={indicatorStyle} ></div>
        </div>
    )
}

