import * as React from 'react';
import {Color} from "./color";
import {ColorPicker} from "./colorPicker";
import {SidebarComponent} from "./sidebar";
import {FaceComponent} from "./face";

interface Props{
}

interface State{
    satisfyLevel:number;
}

export class App extends React.Component<{},State>{

    constructor(props:Props){
        super(props);
        this.state={satisfyLevel:300};
    }
    public render(){
        return(
            <div>
                <input type="range"
                       min="0"
                       max="500"
                       value={this.state.satisfyLevel}
                       onChange={(event : any) => this.setState({satisfyLevel :event.target.value} as State)}
                />
                <br/>
                <span>{this.state.satisfyLevel}</span>
                <br/>
                <FaceComponent level={this.state.satisfyLevel}/>
            </div>
        )
    }
}