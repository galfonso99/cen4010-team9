import React, { Component } from 'react'
import './CreateAccount.css';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {

    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Create Account
                </div>

                <div className="box">
                
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>

                </div>

            </div>
        );
    }

}

export default CreateAccount;