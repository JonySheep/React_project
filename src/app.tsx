import * as React from 'react';
import {Color} from "./color";
import {ColorPicker} from "./colorPicker";

interface Props{
}

interface State{
    color:Color;
}

export class App extends React.Component<{},State>{
    constructor(props:Props){
        super(props);

        this.state={color:{red:100,green:100,blue:100}};
    }

    setColorState=(newColor:Color)=>{
        this.setState({color:newColor})
    }

    public render(){
        return(
            <div>
                <span>Color: [red: {this.state.color.red}, green: {this.state.color.green}, blue: {this.state.color.blue}]</span>
                <ColorPicker color={this.state.color} onColorUpdate={this.setColorState}/>
            </div>
        )
    }
}