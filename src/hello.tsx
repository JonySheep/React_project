import * as React from 'react';

interface Props{
    username:string;
}

export const HelloComponent=(props:Props)=>{
    return(
        <h2>Hello User:{props.username}!!</h2>
    );
}