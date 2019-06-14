import React from 'react';
import {Route,NavLink} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    axiosWithAuth().get('http://localhost:3300/api/jokes')
    .then(res => {
      console.log('get users ',res.data)
      this.setState({
        users:res.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){

  return (

    <div className="App">
            { (this.state.users.length === 0) &&
      
      <nav>
    <NavLink to='/register'>Register</NavLink>
    <NavLink to='/login'>Login</NavLink>
    </nav>
    
    }
  
  
    <h1>Dad jokes</h1>
    <Route path='/register' component = {Register}/>
    <Route path='/login' component = {Login}/>
    <Route path='/jokes' render={props => (
      <Users {...props}
      users={this.state.users}
      />
    )} />
    </div>

  );}
}

export default App;
