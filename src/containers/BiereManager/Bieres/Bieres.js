import React from 'react'
import { NavLink } from 'react-router-dom';

const Bieres = (props) =>{
    console.log(props);
    return (
            <div className="row no-gutters border m-2">
                <div className="col-4">
                    <img src={props.image} width="100%" className="p-2" alt={props.name} />
                </div>
                    
                <div className="col">
                    <h2>Nom : {props.name}</h2>
                    <div>Volume : {props.volume}L</div>
                    <div>L'année : {props.years}</div>
                    <NavLink to={props.match.url+"/"+props.name} className="nav-link">Voir les détails de cette biére</NavLink>
                </div>
            </div>
    )
};

export default Bieres;

