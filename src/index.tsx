import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hello} from "./component/Hello";

ReactDOM.render(
    <Hello name={'刘昊然'} age={18}/>,
    document.getElementById('app')
);