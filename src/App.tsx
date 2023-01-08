import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffButton} from "./components/OnOff/OnOff";


function App() {

    return (
        <div>
            <input/>
            <input checked={true} value='test' type="password"/>

            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={'lorem'}/>

            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />


            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {

    return (
        <h1>{props.title}</h1>
    )
}


export default App;