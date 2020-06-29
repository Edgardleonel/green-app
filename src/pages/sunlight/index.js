/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Sun from '../../assets/sun.png';
import Logo from '../../assets/logo-greenthumb.svg';
import { Link } from "react-router-dom";


class Sunlight extends Component {

  state = {
    sun: ""
  }

  setClima(event) {
    console.log(event.target.value);
    const clima = event.target.value;
    localStorage.setItem('sunlight', clima );
    this.setState({ sun: event.target.value });
  }

  submit() {
    const { sun } = this.state;
    return sun.length > 0;
  }


  render() {

    const isEnabled = this.submit();

    return (
      
          <div>
              <img className="logo-quizz" src={Logo} />
            <div onChange={this.setClima.bind(this)} className="container" style={{ textAlign: 'center' }}>
              <img className="header" src={Sun} />
              <h3>First, set the amount of <span className="destaque">sunlight</span> your plant will get.</h3>
                <div className="margin">
                <div className="row">
                  <div className="col">
                    <input  id="myButton1" type="radio" value="high" name="clima" />   
                    <label for="myButton1" className="orange" >
                      <div className="icon transparent-high">
                        <div className="HighSun"></div>
                        <h6 className="title">High sunlight</h6>
                      </div>
                      
                    </label>
                  </div>

                  <div className="col">
                    <input id="myButton2" type="radio" value="low" name="clima" />
                    <label for="myButton2" className="orange" >
                      <div className="icon transparent-low">
                        <div className="LowSun"></div>
                        <h6 className="title">Low sunlight</h6>
                      </div>
                      
                    </label>
                  </div> 

                  <div className="col">
                    <input id="myButton3" type="radio" value="no" name="clima"/>
                    <label for="myButton3" className="orange" >
                      <div className="icon transparent-no">
                        <div className="No"></div>
                        <h6 className="title">No sunlight</h6>
                      </div>
                    
                    </label>
                  </div>
                </div>
                </div>
                <div className="row">         
                  <div className="col">
                    <Link to="/">
                      <button className="transparent" type="submit"><i class="fa fa-arrow-left"></i>home</button>
                    </Link>
                  </div>         
                  <div className="col">
                    <Link disabled={!isEnabled} to="/water">
                      <button disabled={!isEnabled}  className="transparent" type="submit"><i  class="fa fa-arrow-right" aria-hidden="true"></i>next</button>
                    </Link>
                  </div>       
                </div>
              </div>
          </div>  
    );
  }
}

export default Sunlight