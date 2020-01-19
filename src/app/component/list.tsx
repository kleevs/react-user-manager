import * as React from "react";
import { ListPage } from '../../domain/page/list';
import { useObserver } from "../tools/react.extend";
import ToolService from '../../domain/api/tool.service';
import { attention } from "../tools/ui";

export default (props: {page: ListPage, tool: ToolService}) => {
useObserver(props.page);
return <div> 
  <h1 className="title">Liste des utilisateurs</h1> 
  <hr/>
  <div className="container">
      <table className="user-table table table-striped table-hover"> 
          <thead> 
              <tr> 
                  <td>Nom</td> 
                  <td>Prénom</td> 
                  <td>Date de naissance</td> 
                  <td>Login</td> 
                  <td>Actif</td> 
                  <td></td>
              </tr> 
          </thead> 
          <tbody> 
          {props.page.users.map((_, i) => 
            <tr key={i.toString()} className="clickable" onClick={() => props.page.goTo(_.id)}>
                <td>{_.lastName}</td>
                <td>{_.firstName}</td>
                <td>{props.tool.toDateString(_.birthdate)}</td>
                <td>{_.login}</td>
                <td>{_.isAcif ? "actif" : "inactif"}</td>
                <td>
                    <a className="fa fa-trash clickable" 
                        data-content="Suppression"
                        onMouseOver={(e) => attention(e)} 
                        onClick={(e) => props.tool.stopPropagation(e, () => props.page.removeUser(_.id))}>
                    </a>
                </td>
            </tr> 
          )}
          </tbody> 
      </table> 
      <a href="/users" className="btn btn-primary full-width attention-hover" >Nouvel utilisateur</a>
  </div>
</div>
;
}