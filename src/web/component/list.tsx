import * as React from "react";
import { IAppService } from '../../app/api/app.service';

export default (app: IAppService) =>
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
          {app.list.map((_, i) => 
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
;