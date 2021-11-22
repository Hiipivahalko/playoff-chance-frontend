import './styles/App.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

import cup from './images/cup.png';
import {
  Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom'

import Select from './components/Select'
import Input from './components/Input';
import Simulate from './components/Simulate';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className="cup" src={cup} alt='stanley cup'/>
      </Link>
      <h1>Chance to Playoff</h1>
      <Link to='/simulate'>
        <button className='menu-btn' >Simulate</button>
      </Link>
      <Link to='/input'>
        <button className='menu-btn' >Input</button>
      </Link>
    </div>
  )
}

const Main = () => {

  const [start, setStart ] = useState(false)
  const [loading, setLoading ] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}status`)
      setStart(true)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err.message);
    }
  }


  if (start) {
    return <Redirect to="/select" />
  }
  
  return (
    <div className='main-container'>
      {loading ? <p>Setting up backend...</p> : <button className='start-btn' onClick={handleSubmit}>Start application</button>}
    </div>
  )
}


const App = () => {

  return (
    <div className='main'>
      <Header />
      
 
        <Switch>
          
          <Route path='/input'>
            <Input />
          </Route>
          <Route path='/select'>
            <Select />
          </Route>
          <Route path='/simulate'>
            <Simulate />
          </Route>
          <Route path='/'>
            <Main />
          </Route>  
        </Switch>
    </div>
  )
}

export default App;
