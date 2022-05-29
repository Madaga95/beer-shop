import axios from 'axios'
import React, {Component} from 'react'
import Titreh1 from '../../components/Titres/TitreH1'
import Bieres from '../BiereManager/Bieres/Bieres'

class UneBiere extends Component{

    state = {
        data : null,
        loading : false,
    }




    componentDidMount = () => {
        axios.get(`https://api.punkapi.com/v2/beers/${this.props.nomBiere}?beerId=/`)
            .then(reponse =>{
                this.setState({
                    loading:false,
                    data: reponse.data[0]
                });
                console.log(reponse.data);
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

    render(){
        return (
            <div className="container">
                <Titreh1>Page de la biére :  {this.props.nomBiere}</Titreh1>
                {
                    this.state.data && 
                    <Bieres
                        image={this.state.data.image}
                        name={this.state.data.name}
                        years={this.state.data.years}
                        description={this.state.data.description}
                        volume={this.sate.data.volume}
                        {...this.props}
                    />
                }
            </div>
        )
    }
}

export default UneBiere;