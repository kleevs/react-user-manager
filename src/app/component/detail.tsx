import * as React from "react";
import { useState } from "react";
import { attention } from '../tools/ui';
import { DetailPage } from '../../domain/page/detail';
import { useObserver } from "../tools/react.extend";
import ToolService from '../../domain/api/tool.service';

export default (props: {page: DetailPage, tool: ToolService}) => {
useObserver(props.page);
var [date, setDate] = useState('');
return <div>
    <h1 className="title">Détail de l'utilisateur</h1> 
    <hr/>
    <div className="container">
        <form className="full-width center"  onSubmit={(e) => props.tool.preventDefault(e, () => props.page.saveUser())}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Nom</span>
                </div>
                <input type="text" 
                    value={props.page.lastName} 
                    onChange={(e) => { 
                        props.page.lastNameError = '';
                        props.page.lastName = e.target.value;
                    }}
                    className={`form-control ${props.page.lastNameError && 'has-error animated rubberBand' || ''}`}
                    placeholder="Lastname" 
                />            
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Prénom</span>
                </div>
                <input type="text" 
                    value={props.page.firstName} 
                    onChange={(e) => { 
                        props.page.firstNameError = '';
                        props.page.firstName = e.target.value;
                    }}
                    className={`form-control ${props.page.firstNameError && 'has-error animated rubberBand' || ''}`}
                    placeholder="Firstname" 
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Date de naissance</span>
                </div>
                <input type="text" 
                    value={props.tool.toDateString(props.page.birthdate) || date} 
                    onChange={(e) => { 
                        props.page.birthdateError = '';
                        props.page.birthdate = props.tool.parseDate(e.target.value);
                        setDate(e.target.value);
                    }} 
                    className={`form-control ${props.page.birthdateError && 'has-error animated rubberBand' || ''}`}
                    placeholder="Birthday"
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Login</span>
                </div>
                <input type="text" 
                    disabled={!!props.page.id} 
                    value={props.page.login} 
                    onChange={(e) => { 
                        props.page.loginError = '';
                        props.page.login = e.target.value;
                    }} 
                    className={`form-control ${props.page.loginError && 'has-error animated rubberBand' || ''}`} 
                    placeholder="Login" 
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                </div>
                <input type="password" 
                    disabled={!!props.page.id} 
                    value={props.page.password} 
                    onChange={(e) => { 
                        props.page.passwordError = '';
                        props.page.password = e.target.value;
                    }}
                    className={`form-control ${props.page.passwordError && 'has-error animated rubberBand' || ''}`} 
                    placeholder="Password" 
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" checked={props.page.isActif} onChange={(e) => props.page.isActif = e.target.checked} aria-label="Checkbox for following text input" />
                    </div>
                </div>
                <span  className="form-control">{props.page.isActif && 'Actif' || 'Inactif'}</span>
            </div>

            <button type="submit" onMouseOver={(e) => attention(e)} className="btn btn-primary full-width" data-content="Enregistrer l'utilisateur">Enregistrer</button>
        </form>
    </div>
</div>
;
}