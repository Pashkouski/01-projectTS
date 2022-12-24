import React from "react";

type AccordionPropTitle = {
    titleValue: string
    collapsed?: boolean
};

function Accordion(props: AccordionPropTitle) {
    console.log("Accordion")

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitleProp = {
    title: string
}


function AccordionTitle(props: AccordionTitleProp) {
    console.log("AccordionTitle")
    return (
        <div>
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