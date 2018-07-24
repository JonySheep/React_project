import * as React from 'react';
import {Header} from "./components/header";
import {Body} from "./components/body";

interface Props{
    title:string;
}

export const Panel:React.StatelessComponent<Props>=(props)=>
    <div className="card">
        <Header title={props.title}/>
        <ul className="list-group list-group-flush">
            <Body>
                {props.children}
            </Body>
        </ul>
    </div>