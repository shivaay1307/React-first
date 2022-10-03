import React from 'react';
import Joi from "joi-browser";
import Form from './form';

class Register extends Form {
    state = { 
        data: { email: "", password: "", username:""},
        errors: {}
    } 
    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password'),
        username: Joi.string().required().label('Username')
    };

    doSubmit = e => {
        //call the server
        console.log("submitted");
    }

    render() { 
        return (
            <div className='container' onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <form className='login bg-dark text-light'>
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("username", "Username", "username")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default Register;