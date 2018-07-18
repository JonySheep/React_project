import * as React from 'react';

interface HelloProps{
    name:string,
    age:number
}

export class Hello extends React.Component<HelloProps,{}>{
    render(){
        return(
            <div>
                I am {this.props.name},{this.props.age} years olds!!
            </div>
        )
    }
}