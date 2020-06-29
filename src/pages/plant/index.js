/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Logo from '../../assets/logo-greenthumb.svg';
import api from "../../services/api";
import pet from "../../assets/pet-grey.svg";
import toxic from "../../assets/toxic-grey.svg";
import noanswer from "../../assets/no-answer-grey.svg";
import high from "../../assets/high-sun-grey.svg";
import low from "../../assets/low-sun-grey.svg";
import one from "../../assets/one-drop-grey.svg";
import two from "../../assets/two-drops-grey.svg";
import three from "../../assets/three-drops-grey.svg";
import envelop from "../../assets/envelop.png";
import Skeleton from 'react-loading-skeleton';



class Plant extends Component {

    state = {
        plant: {},
        id: "",
        name: "",
        email: "",
        error_name: "",
        error_email: "",
        message: "",
        send: false
    }
  
componentDidMount ()  {
    this.loadPlant();  
    document.body.style.backgroundColor = '#fff';
}


loadPlant = async () => {
const {id} = this.props.match.params;
const response = await api.get(`/front-plantTest-service/plant?id=${id}`);
console.log(response)
this.setState({ plant: response.data });
}

handleForm = async e => {
    e.preventDefault();
    const {id} = this.props.match.params;
    const { name, email } = this.state;
    if (!name) {
      this.setState({ error_name: "Please provide a name." });
    } 
    if ( !email) {
        this.setState({ error_email: "Please provide a valid e-mail." });
    }    
    else {
      try {
        const response = await api.post('/front-plantTest-service?', {id, name, email});
        console.log(response)

        this.setState({ send: true });

      } catch (err) {
        this.setState({
          message:
            "Ops... Houve um problema!"
        });
      }
    }
  };

  render() {

    const { plant } = this.state;


    return (
<div className="my-plant">
    <img className="logo-quizz" src={Logo} />
    <div className="margin-detail">
        <div className="container" style={{ textAlign: 'center' }}>
                <div className="row">
                    <div className="col">
                    <div className="product">
                        <h1>{plant.name || <Skeleton height={150} count={3}/>}</h1>
                        <h3>$ {plant.price}</h3>
                        <img src={plant.url} />
                        <div className="icons">
                            <div className="description-icons">
                                <img style={plant.sun === "no" ? { display: 'flex' } : { display: 'none' }} src={plant.sun === "no" ? noanswer : false }  />
                                <img style={plant.sun === "high" ? { display: 'flex' } : { display: 'none' }}  src={plant.sun === "high" ? high : false } />
                                <img style={plant.sun === "low" ? { display: 'flex' } : { display: 'none' }}  src={plant.sun === "low" ? low : false } />
                                <span>{plant.sun} Sunlight </span>
                            </div>
                            <div className="description-icons">
                                <img style={plant.water === "rarely" ? { display: 'flex' } : { display: 'none' }}  src={plant.water === "rarely" ? one : false } />
                                <img style={plant.water === "regularly" ? { display: 'flex' } : { display: 'none' }}  src={plant.water === "regularly" ? two : false } />
                                <img style={plant.water === "daily" ? { display: 'flex' } : { display: 'none' }} src={plant.water === "daily" ? three : false } />
                                <span>Water {plant.water}</span>
                            </div>
                            <div className="description-icons">
                                <img  src={plant.toxicity ? toxic : pet } />
                                <span> {plant.toxicity ? <p><strong>Beware!</strong> Toxic for pets</p> : <p>Non-toxic for pets</p>}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="form" style={this.state.send === false ? { display: 'block' } : { display: 'none' }}>
                        <h2 className="message">{this.state.message}</h2>
                        <h2>Nice pick!</h2>
                        <p>Tell us your name and e-mail and we will get in touch regarding your order ;)</p>
                        <form  onSubmit={this.handleForm}> 
                            <label>Name:</label>
                            <input onChange={e => this.setState({ name: e.target.value })} type="text" placeholder="Crazy Plant Person" name="name" />
                            <p style={{color: "red"}}>{this.state.error_name}</p>
                            <label>E-mail:</label>
                            <input onChange={e => this.setState({ email: e.target.value })} email type="email" placeholder="plantperson@email.com" name="email" />
                            <p style={{color: "red"}}>{this.state.error_email}</p>
                            <input id="send" type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="form envelop" style={this.state.send === true ? { display: 'block' } : { display: 'none' }}>
                        <h2>Thank you!</h2>
                        <p>You will hear from us soon. Please check your e-mail!</p>
                        <img src={envelop} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
    );
  }
}

export default Plant;