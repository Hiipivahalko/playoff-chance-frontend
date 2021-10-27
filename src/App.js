import './styles/App.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Logo from './components/Logo';

import cup from './images/cup.png';
import {
  Router,
  Route,
  Redirect,
  Switch,
  useHistory,
  Link
} from 'react-router-dom'

import Team from './components/Team'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className="cup" src={cup} alt='stanley cup'/>
      </Link>
      <h1>Change to Playoff</h1>
    </div>
  )
}

const Main = () => {

  const [start, setStart ] = useState(false)
  //const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    //const res = await axios.get(`http://localhost`)
    console.log(process.env.REACT_APP_BACKEND_URL);
    setStart(true)
    //history.push('/')
  }

  console.log(start);

  if (start) {
    return <Redirect to="/teams" />
  }
  
  return (
    <div className='main-container'>
      
      <button className='start-button' onClick={handleSubmit}>Start application</button>
    </div>
  )
}



const App = () => {

  

  

  return (
    <div className='main'>
      <Header />
      
 
        <Switch>
          
          <Route path='/teams'>
            <Team />
          </Route> 
          <Route path='/'>
            <Main />
          </Route>  
        </Switch>
  
    </div>
  )
}

export default App;
