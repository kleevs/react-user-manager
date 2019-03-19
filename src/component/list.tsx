import * as React from "react";
import { Component } from 'react.extend';

@Component<List>((list) =>
<div> 
  <h1 className="title">Liste des utilisateurs</h1> 
  <hr/>
  <div className="container">
      <table className="user-table table table-striped"> 
          <thead> 
              <tr> 
                  <td>Nom</td> 
                  <td>Prénom</td> 
                  <td>Date de naissance</td> 
                  <td>Login</td> 
                  <td>Actif</td> 
              </tr> 
          </thead> 
          <tbody> 
          {list.list.map((_, i) => 
            <tr key={i.toString()}>
                <td>{_.lastName}</td>
                <td>{_.firstName}</td>
                <td>{_.birthdate.toString()}</td>
                <td>{_.login}</td>
                <td>{_.isAcif ? "actif" : "inactif"}</td>
            </tr> 
          )}
          </tbody> 
      </table> 
  </div>
</div>
)
export default class List {
    private _list: IUser[] = [{
        lastName: "string",
        firstName: "string",
        birthdate: new Date(),
        login: "string",
        isAcif: false,
    }];
    constructor() {
    }

    get list() { return this._list; }
}

interface IUser {
    lastName: string;
    firstName: string;
    birthdate: Date;
    login: string;
    isAcif: boolean;
}