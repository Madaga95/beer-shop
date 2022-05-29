import React, {Component} from 'react'
import Titre from "../../components/Titres/TitreH1";
import Bouton from "../../components/Bouton/Bouton";
import axios from 'axios';
import Bieres from './Bieres/Bieres';



class BiereManager extends Component{
    state = {
        lesBieres: [],
        loading : false
    }

    componentDidMount = () => {
        axios.get("https://api.punkapi.com/v2/beers")
            .then(reponse => {
                const lesBieres = reponse.data.map(bieres => {
                    return{
                        name : bieres.name,
                        description : bieres.description,
                        years : bieres.first_brewed,
                        volume : bieres.volume.value,
                        image : bieres.image_url,
                        ingredients : bieres.ingredients
                    }
                })
                this.setState({lesBieres});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })

    }

    render(){
        return(
            <div className="container">
                <Titre>Liste des Bières</Titre>
                {
                    this.state.loading 
                    ? <div>Chargement...</div>
                    : <div className="row no-gutters">
                        {this.state.lesBieres.map(bieres => {
                            
                            return (
                            <div className="col-12 col-md-6 border" key={bieres.name}>
                                <Bieres {...bieres} {...this.props}/>
                            </div>
                            );
                        })}
                    </div>
                }
                <div>pagination</div>
            </div>
        );
    }


}

export default BiereManager;