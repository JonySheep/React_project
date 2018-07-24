import * as React from 'react';
import {Panel,ContentCenter} from '../../common';
import {Form} from './components/form';
import {LoginEntity} from "../login";

interface Props{
    loginInfo:LoginEntity;
    updateField:(string,any)=>void;
    doLogin:()=>void;
}
export const LoginPage=(props:Props)=>

    <ContentCenter>
    <Panel title={"Sign in!"}>
        <Form {...props}>
        </Form>
    </Panel>
    </ContentCenter>
