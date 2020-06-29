/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './style.css';
import Logo from '../../assets/logo-greenthumb.svg';
import Banner from '../../assets/illustration-home.png';
import { withRouter } from "react-router-dom";
import Auth  from '../../services/auth';


class Home extends Component {
constructor(props) {
    super(props)
    this.login = this.login.bind(this);
}

login() {
    Auth.auth();
    this.props.history.push('/sunlight');
}


    render() {
        return (           
            <div className="container">
                <img className="logo" src={Logo} />
                <div className="row">
                    <div className="col" >
                        <h1>Find your next green friend</h1>
                        <div className="quizz"><button onClick={this.login} type="submit"><i class="fa fa-arrow-right" aria-hidden="true"></i>start quizz</button></div>
                    </div>
                    <div className="col" >
                        <img className="banner" src={Banner} />
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(Home);
