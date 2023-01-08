import React, {useState} from "react";

type AccordionPropTitle = {
    titleValue: string

};

function Accordion(props: AccordionPropTitle) {

    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = () => {
         (collapsed) ? setCollapsed(false) : setCollapsed(true)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClickHandler={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitleProp = {
    title: string
    onClickHandler: () => void
}


function AccordionTitle(props: AccordionTitleProp) {
    return (
        <div  onClick={props.onClickHandler}>
            <h3>{props.title}</h3>
        </div>
    )
}

function AccordionBody() {
    console.log("AccordionBody");
    return (
        <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
        </ul>
    )
}

export default Accordion;