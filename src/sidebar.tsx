import * as React from 'react';

const className=require('./sidebar.css');

interface Props{
    isVisible:boolean;
}

const divStyle=(props:Props):React.CSSProperties=>({
    width:(props.isVisible)?'23rem':'0rem'
});

export const SidebarComponent=(props:Props)=>
    <div id="mySidenav" className={className.sidenav} style={divStyle(props)}>
        <span>Basic side bar,first steps</span>
    </div>
