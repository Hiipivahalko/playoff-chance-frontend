import React, { useState, useEffect } from "react";
import {
  Redirect,
  Link
} from 'react-router-dom'
import axios from 'axios'

import SelectForm from "./SelectForm";
import Team from "./Team";

const Barcode = ({handleSubmit}) => {

  const [barValue, setBarValue] = useState(10)

  const changeVal = (event) => {
    event.preventDefault()
    //console.log(event.target.value);
    setBarValue(event.target.value)
  }

  return (
    <>
      
      <div className='row'>
        <p className='lable-col'>Games: {barValue}</p>
      </div>
      <form onSubmit={handleSubmit} className='form2'>
        <div className='row'>
        <label className='lable-col'>10</label>
        <input className='slider' type='range' min='10' max='80' step='5' id='game_range'
          onChange={changeVal}
        />
        <label className='lable-col'>80</label>
        </div>
        <div className='col4'>
          <button type='submit' className='predict-btn'>Predict</button>
        </div>
      </form>
    </>
  )
}

const Simulate = () => {

  const [teams, setTeams ] = useState(null)
  const [team, setTeam] = useState('')
  const [prediction, setPrediction] = useState('')
  const [errorText, setErrorText] = useState(null)

  useEffect( async () => {
    try {
      console.log('backend_URL:', process.env.REACT_APP_BACKEND_URL);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/teams`)
      //console.log(res.data.data);
      setTeams(res.data.data)
    } catch (err) {
      console.log(`error: ${err.message}`)
    }
  }, [setTeams])

  const selectTeam = async (event) => {
    event.preventDefault()

    if (event.target.value === '') {
      return;
    }
    setTeam(event.target.value)
    setPrediction('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      'team': team
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}predictSimulate`, data)
      setPrediction(res.data.data)
      setErrorText(null)
    } catch (err) {
      console.log(`error: ${err}`);
      setErrorText(err.message)
    }
  }

  if (teams === null) {
    return (
      <>
        <p className='text-t'>Loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Simulate season 2018-2019</h1>
      <SelectForm teams={teams} selectTeam={selectTeam}/>

      {team !== '' ? 
        <div className='team-container'>
          <Team team={team} prediction={prediction}/>
          
            <Barcode handleSubmit={handleSubmit}/>
          
          {errorText ? 
            <div className='row'><p className='error'>{errorText}</p></div>          
          : null}
          
        </div>
        : null
      }
    </>
  )
}

export default Simulate;