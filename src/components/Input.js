import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Team from './Team';

import SelectForm from './SelectForm';


const Prediction = ({team, predictChance}) => {

  return (
      <form onSubmit={predictChance} id='pred_form'>
        <div className='col2'>
          <div className='row2'>
            <label className='lable-col'>PIM:</label>
            <input type='number' id='pim'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Forward performance:</label>
            <input type='number' id='forward_p'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Defence performance:</label>
            <input type='number' id='defence_p'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Goalie performance:</label>
            <input type='number' id='goalie_p'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Star players:</label>
            <input type='number' id='star_p'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>GF/GP:</label>
            <input type='number' id='gf_gp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>GA/GP:</label>
            <input type='number' id='ga_gp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>PP%</label>
            <input type='number' id='pp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>PK%:</label>
            <input type='number' id='pk'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Net PP%:</label>
            <input type='number' id='net_pp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Net PK%:</label>
            <input type='number' id='net_pk'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>Shots/GP:</label>
            <input type='number' id='shots_gp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>SA/GP:</label>
            <input type='number' id='sa_gp'/>
          </div>
          <div className='row2'>
            <label className='lable-col'>FOW%:</label>
            <input type='number' id='fow'/>
          </div>
        </div>
        
        <div className='col4'>
          <button type='submit' className='predict-btn'>Predict</button>
        </div>
      </form>
      
  )
}


const Input = () => {

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

  const predictChance = async (event) => {
    event.preventDefault()

    const pim = event.target[0].value
    const f_p = event.target[1].value
    const d_p = event.target[2].value
    const g_p = event.target[3].value
    const start_p = event.target[4].value
    const gf_gp = event.target[5].value
    const ga_gp = event.target[6].value
    const pp = event.target[7].value
    const pk = event.target[8].value
    const net_pp = event.target[9].value
    const net_pk = event.target[10].value
    const shots_gp = event.target[11].value
    const sa_gp = event.target[12].value
    const fow = event.target[13].value

    if  (! (pim && f_p && d_p && g_p && start_p && gf_gp && ga_gp && pp && pk && net_pp && net_pk && shots_gp && sa_gp && fow)  ) {
      setErrorText('Fill all the inputfields')
      console.log('error');
      return;
    }
    
    const data = {
      'team': team,
      'pim': pim,
      'f_p': f_p,
      'd_p': d_p,
      'g_p': g_p,
      'start_p': start_p,
      'gf_gp': gf_gp,
      'ga_gp': ga_gp,
      'pp': pp,
      'pk': pk,
      'net_pp': net_pp,
      'net_pk': net_pk,
      'shots_gp': shots_gp,
      'sa_gp': sa_gp,
      'fow': fow,
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}predict`, data)
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
      <h1>Give Input</h1>
      <SelectForm teams={teams} selectTeam={selectTeam}/>

      {team !== '' ? 
        <div className='team-container'>
          <Team team={team} prediction={prediction}/>
          <div className='row'>
            <Prediction team={team} predictChance={predictChance}/>
          </div>
          {errorText ? 
            <div className='row'><p className='error'>{errorText}</p></div>          
          : null}
          
        </div>
        : null
      }
    </>
  )
}

export default Input