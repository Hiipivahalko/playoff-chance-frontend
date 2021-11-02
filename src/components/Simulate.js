import React, { useState, useEffect } from "react";
import axios from 'axios'

import SelectForm from "./SelectForm";
import Team from "./Team";

const Barcode = ({handleSubmit, team}) => {

  const [barValue, setBarValue] = useState(10)

  const changeVal = (event) => {
    event.preventDefault()
    //console.log(event.target.value);
    setBarValue(event.target.value)
  }

  /*return (
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
        <div className='col5'>
          <button type='submit' className='predict-btn'>Predict</button>
        </div>
      </form>
    </>
  )*/

  return (
    <>
      <form onSubmit={handleSubmit} >
      <div className='col2'>
          <div className='row2'>
            <label className='lable-col'>PIM (0..1):</label>
            <p className='lable-col2'>{team.pim}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Forward performance (0..1):</label>
            <p className='lable-col2'>{team.f_p}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Defence performance (0..1):</label>
            <p className='lable-col2'>{team.d_p}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Goalie performance (0..1):</label>
            <p className='lable-col2'>{team.g_p}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Star players (0..20):</label>
            <p className='lable-col2'>{team.start_p}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>GF/GP (0.. inf):</label>
            <p className='lable-col2'>{team.gf_gp}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>GA/GP (0.. inf):</label>
            <p className='lable-col2'>{team.ga_gp}</p>
          </div>
        </div>
        <div className='col2'>
          <div className='row2'>
            <label className='lable-col'>PP% (0..100)</label>
            <p className='lable-col2'>{team.pp}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>PK% (0..100):</label>
            <p className='lable-col2'>{team.pk}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Net PP% (0..100):</label>
            <p className='lable-col2'>{team.net_pp}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Net PK% (0..100):</label>
            <p className='lable-col2'>{team.net_pk}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>Shots/GP (0..100):</label>
            <p className='lable-col2'>{team.shots_gp}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>SA/GP (0..100):</label>
            <p className='lable-col2'>{team.sa_gp}</p>
          </div>
          <div className='row2'>
            <label className='lable-col'>FOW% (0..100):</label>
            <p className='lable-col2'>{team.fow}</p>
          </div>
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
  const [team, setTeam] = useState(null)
  const [prediction, setPrediction] = useState('')
  const [errorText, setErrorText] = useState(null)
  const [teamData, setTeamData ] = useState(false)

  useEffect( async () => {
    try {
      console.log('backend_URL:', process.env.REACT_APP_BACKEND_URL);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/teams`)
      setTeams(res.data.data)
    } catch (err) {
      console.log(`error: ${err.message}`)
    }
  }, [setTeams])

  useEffect( async () => {
    try {
      if (team !== null) {
        const res2 = await axios.get(`${process.env.REACT_APP_BACKEND_URL}teams/${team.replace(' ', '_')}`, team)
        //setTeam(res2.data.data)
        //console.log(res2.data);
        setTeamData(res2.data)
      }
      
    } catch (err) {
      console.log(`error: ${err.message}`)
    }
  }, [team])

  const selectTeam = async (event) => {
    event.preventDefault()

    if (event.target.value === '') {
      return;
    }
    setTeam(event.target.value)
    setPrediction('')
    console.log('team selected');
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
      <h1>Simulate season 2021-2022, current standing (01.11.21)</h1>
      <a href='https://www.nhl.com/standings/2021/division' target="_blank">nhl.com/standings/2021/division</a>
      <SelectForm teams={teams} selectTeam={selectTeam}/>

      {team !== null ? 
        <div className='team-container'>
          <Team team={team} prediction={prediction}/>
          <Barcode handleSubmit={handleSubmit} team={teamData}/>
          {errorText ? 
            <div className='row'><p className='error'>{errorText}</p></div>          
            : null
          }
        </div>
        : null
      }
    </>
  )
}

export default Simulate;