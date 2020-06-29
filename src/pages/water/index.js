/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Wateringcan from '../../assets/wateringcan.png';
import Logo from '../../assets/logo-greenthumb.svg';
import { Link } from "react-router-dom";


class Water extends Component {

  state = {
    water: ""
  }

  setWater(event) {
    console.log(event.target.value);
    const waters = event.target.value;
    localStorage.setItem('water', waters );
    this.setState({ water: event.target.value });
  }

  submit() {
    const { water } = this.state;
    return water.length > 0;
  }

  render() {

    const isEnabled = this.submit();

    return (
      
          <div>
              <img className="logo-quizz" src={Logo} />
            <div onChange={this.setWater.bind(this)} className="container" style={{ textAlign: 'center' }}>
              <img className="header" src={Wateringcan} />
              <h3>How often do you want to <span className="destaque">water</span> your plant?</h3>
                <div className="margin">
                <div className="row">
                  <div className="col">
                    <input  id="myButton1" type="radio" value="rarely" name="water" />   
                    <label for="myButton1" className="green" >
                      <div className="icon transparent-rarely">
                        <div className="Rarely"></div>
                        <h6 className="title">Rarely</h6>
                      </div>
                      
                    </label>
                  </div>

                  <div className="col">
                    <input id="myButton2" type="radio" value="regularly" name="water" />
                    <label for="myButton2" className="green" >
                      <div className="icon transparent-regularly">
                        <div className="Regularly"></div>
                        <h6 className="title">Regularly</h6>
                      </div>
                      
                    </label>
                  </div> 

                  <div className="col">
                    <input id="myButton3" type="radio" value="daily" name="water"/>
                    <label for="myButton3" className="green" >
                      <div className="icon transparent-daily">
                        <div className="Daily"></div>
                        <h6 className="title">Daily</h6>
                      </div>
                    
                    </label>
                  </div>
                </div>
                </div>
                <div className="row">         
                  <div className="col">
                    <Link to="/sunlight">
                      <button className="transparent" type="submit"><i class="fa fa-arrow-left" aria-hidden="true"></i>previous</button>
                    </Link>
                  </div>         
                  <div className="col">
                    <Link to="/pets">
                      <button disabled={!isEnabled}  className="transparent" type="submit"><i  class="fa fa-arrow-right" ></i>next</button>
                    </Link>
                  </div>       
                </div>
              </div>
          </div>  
    );
  }
}

export default Water;