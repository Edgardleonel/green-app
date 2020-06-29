/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Dog from '../../assets/dog.png';
import Logo from '../../assets/logo-greenthumb.svg';
import { Link } from "react-router-dom";


class Pets extends Component {

  state = {
    pet: ""
  }

  setPets(event) {
    console.log(event.target.value);
    const pets = event.target.value;
    localStorage.setItem('pets', pets );
    this.setState({ pet: event.target.value });
  }

  submit() {
    const { pet } = this.state;
    return pet.length > 0;
  }

  render() {

    const isEnabled = this.submit();

    return (
      
          <div>
              <img className="logo-quizz" src={Logo} />
            <div onChange={this.setPets.bind(this)} className="container" style={{ textAlign: 'center' }}>
              <img className="header" src={Dog} />
              <h3 className="title-pets">Do you have pets? Do they  <span className="destaque">chew</span> plants?</h3>
              <p className="toxic">We are asking because some plants can be <span className="destaque">toxic</span> for your buddy. </p>
                <div className="margin-pets">
                <div className="row">
                  <div className="col">
                    <input  id="myButton1" type="radio" value="true" name="pets" />   
                    <label for="myButton1" className="orange chew" >
                      <div className="icon transparent-pet">
                        <div className="Pet"></div>
                        <h6 className="title">Yes</h6>
                      </div>
                      
                    </label>
                  </div>

                  <div className="col">
                    <input id="myButton2" type="radio" value="false" name="pets" />
                    <label for="myButton2" className="orange chew" >
                      <div className="icon transparent-no">
                        <div className="No"></div>
                        <h6 className="title">No/They don't care</h6>
                      </div>
                      
                    </label>
                  </div> 
                </div>
                </div>
                <div className="margin-pets-inferior">
                <div className="row">         
                  <div className="col">
                    <Link to="/water">
                      <button className="transparent" type="submit"><i class="fa fa-arrow-left" aria-hidden="true"></i>previous</button>
                    </Link>
                  </div>         
                  <div className="col">
                    <Link to="/picks">
                      <button disabled={!isEnabled} className="transparent" type="submit"><i  class="fa fa-arrow-right" aria-hidden="true"></i>finish</button>
                    </Link>
                  </div>       
                </div>
                </div>
              </div>
          </div>  
    );
  }
}

export default Pets;