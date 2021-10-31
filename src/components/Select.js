import React from "react";
import {
  Redirect,
  Link
} from 'react-router-dom'

const Select = () => {
  return (
    <div className='main-container'>
      <Link to='/simulate'>
        <button className='start-btn' >Simlute season 2018-2019</button>
      </Link>
      <Link to='/input'>
        <button className='start-btn' >Give input</button>
      </Link>
    </div>
  )
}

export default Select;