import React from 'react'
import axios from 'axios'

class Register extends React.Component{

    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3300/api/register',this.state)
        .then(res => {
            console.log('register data ',res)
            this.props.history.push('/login')
        })
        .catch(error => {
            console.log(error)
            // res.status(404).json({message:'could not register'})
        })

        this.setState( {
            username:'',
            password:''
        })

    }

    render(){
    return (
        <div>
            <form>
            <h2>Register</h2>
                <label htmlFor='username'>
                Username</label>
                <input value={this.state.username}
                placeholder='username'
                id='username'
                name='username'
                type='text'
                onChange={this.handleChange}
                />

                <label htmlFor='password'>
                Password</label>
                <input value={this.state.password}
                placeholder='password'
                id='password'
                name='password'
                type='password'
                onChange={this.handleChange}
                />

                <button 
                onClick={this.handleSubmit}>
                Register</button>
            </form>
        </div>
    )
    }
}


export default Register