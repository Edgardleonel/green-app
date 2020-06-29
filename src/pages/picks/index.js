/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Pick from '../../assets/pick.png';
import Logo from '../../assets/logo-greenthumb.svg';
import api from "../../services/api";
import toxic from "../../assets/toxic-grey.svg";
import noanswer from "../../assets/no-answer-grey.svg";
import high from "../../assets/high-sun-grey.svg";
import low from "../../assets/low-sun-grey.svg";
import one from "../../assets/one-drop-grey.svg";
import two from "../../assets/two-drops-grey.svg";
import three from "../../assets/three-drops-grey.svg";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';



class Picks extends Component {

    state = {
        results: [],
        info: ""
    }
  
componentDidMount ()  {
  this.loadPlants();
}


loadPlants = async () => {

const sun = localStorage.getItem('sunlight');
const water = localStorage.getItem('water');
const pets = localStorage.getItem('pets')
const response = await api.get(`/front-plantTest-service?sun=${sun}&water=${water}&pets=${pets}`);
console.log(response.data[0].name)

this.setState({ results: response.data, info: response.data[0].name }); 

}

  render() {
    const { results, info } = this.state;

    return (
        <div>
            <img className="logo-quizz" src={Logo} />
          <div className="container" style={{ textAlign: 'center' }}>
            <img className="header" src={Pick} />
            <h1 className="title-picks">Our picks for you </h1>
            <div style={this.state.info ? { display: 'none' }  : { display: 'block' } } >{this.state.info || <Skeleton height={300} count={4} />}</div>
            <div className="margin-picks">
              <div className="row">               
              {this.state.results.map(plant => (
                <div style={{ margin: '3% 0', maxWidth: '100%' }} className="col-4"> 
                  <label>
                    <div className="plants" key={plant.id}>
                    <img src={plant.url } />
                    <p>{plant.name}</p>
                    <div className="description-plants">
                    <span>$ {plant.price} </span>
                
                    <img src={plant.water === "rarely" ? one : false } />
                    <img src={plant.water === "regularly" ? two : false } />
                    <img src={plant.water === "daily" ? three : false } />
                    <img src={plant.sun === "no" ? noanswer : false } />
                    <img src={plant.sun === "high" ? high : false } />
                    <img src={plant.sun === "low" ? low : false } />
                    <img src={plant.toxicity ? toxic : false } />
                    </div>
                    <Link to={`/plant/${plant.id}`}>
                      <button className="transparent" type="submit">buy now</button>
                    </Link>
                    </div>
                  </label>
                </div>
              ))}
              </div>
            </div>
          </div>
      </div>  
    )
  }
}

export default Picks;