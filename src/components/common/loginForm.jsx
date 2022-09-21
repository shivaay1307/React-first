import React from 'react';
import Joi from "joi-browser";
import Form from './form';

class LoginForm extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    };

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = e => {
        //call the server
        console.log("submitted");
    }

    render() {
        return (
            <div className='container' onSubmit={this.handleSubmit}>
                <h3>LOGIN</h3>
                <form className='login bg-dark text-light'>
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;