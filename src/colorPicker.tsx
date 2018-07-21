import * as React from 'react';
import {Color} from "./color";
import {ColorSliderComponent} from "./colorSlider";


interface Props{
    color:Color;
    onColorUpdate:(color:Color)=>void;
}

const updateColor=(props:Props,colorId:keyof Color)=>(value)=>{
    props.onColorUpdate({
        ...props.color,
        [colorId]:value,
    })
}

export const ColorPicker=(props:Props)=>{
    return(
        <div>
            <ColorSliderComponent value={props.color.red}
                                  onValueUpdate={updateColor(props,'red')}/>
            <br/>

            <ColorSliderComponent value={props.color.green}
                                  onValueUpdate={updateColor(props,'green')}/>
            <br/>

            <ColorSliderComponent value={props.color.blue}
                                  onValueUpdate={updateColor(props,'blue')}/>
        </div>
    )
}