import * as React from 'react';
import {Color} from "./color";

interface Props{
    value:number;
    onValueUpdate:(newValue:number)=>void;
}

export const ColorSliderComponent=(props:Props)=>{
    return(
        <div>
            <input type={"range"}
                   min={0}
                   max={255}
                   value={props.value}
                   onChange={(event:any)=>props.onValueUpdate(event.target.value)} />

            {props.value}
        </div>
    )
}