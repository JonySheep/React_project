import * as  React from 'react';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {LoginEntity} from "../../login";

interface Props {
    loginInfo: LoginEntity;
    updateField: (string, any) => void;
    doLogin: () => void;
}


const onChange = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateField(e.target.name, e.target.value)
}

export const Form =(props:Props)=>

    <form role={"form"}>
        <fieldset>
            <div className="form-group">
                <input className="form-control" placeholder={"E-mail"}
                       onChange={onChange(props)}
                       value={props.loginInfo.login}
                       name={"login"} type={"text"}/>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Password" name={"password"} type={"password"}
                       onChange={onChange(props)} value={props.loginInfo.password}/>
            </div>
            <button type={"button"} className={"btn btn-lg btn-success btn-block"} onClick={props.doLogin}>Login</button>
        </fieldset>
    </form>

