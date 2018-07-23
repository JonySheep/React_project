import * as React from 'react';
import {Color} from "./color";
import {ColorPicker} from "./colorPicker";
import {SidebarComponent} from "./sidebar";
import {MembersTableComponent} from "./membersTable";

interface Props{
}

interface State{
    color:Color;
    isSidebarVisible:boolean;
}

export class App extends React.Component<{},State>{

    public render(){
        return(
            <div>
                <MembersTableComponent/>
            </div>
        )
    }
}