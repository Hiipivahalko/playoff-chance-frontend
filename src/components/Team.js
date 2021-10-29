import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Logo from './Logo';

const Prediction = ({prediction}) => {
  return (
    <div className='pred'>
      <p className='text-team'>Plyoff prediction:</p>
        <div className={prediction}>
          <p className='box-text'>{prediction}</p>
        </div>
    </div>
  )
}

const Team = () => {

  const [teams, setTeams ] = useState(null)
  const [team, setTeam] = useState('')
  const [prediction, setPrediction] = useState('')

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

  if (teams === null) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  const selectTeam = async (event) => {
    event.preventDefault()

    if (event.target.value === '') {
      return;
    }

    //console.log(event.target.value);
    setTeam(event.target.value)
  }

  const predictChance = async (event) => {
    event.preventDefault()
    //console.log('predicted');
    const data = {'team': team}
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}predict`, data)
      //console.log(`res: ${res.data.data}`);
      setPrediction(res.data.data)
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }

  return (
    <>
      <form >
        <label className='text-t'>Select team:</label>
        <select name='my_select' id='team_select' onChange={selectTeam}>
          <option></option>
          {teams.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </form>

      {team !== '' ? 
        <div className='team-container'>
          <Logo team={team}/>
          <div className='team-box'>
            <p className='text-team'>{team}</p>
            <button onClick={predictChance} className='predict-btn'>Predict</button>
            
          </div>
          <Prediction prediction={prediction}/>
        </div>
        : null
      }
    </>
  )

}

export default Team