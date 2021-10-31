import React from 'react'
import Logo from './Logo'

const Team = ({team, prediction}) => {
  return (
    <div className='row'>
      <div className='col'>
        <Logo team={team}/>
        <p className='text-team2'>{team}</p>
      </div>
      {prediction !== '' ?
        <div className='col3'>
          <p className='text-team'>Plyoff prediction:</p>
          <div className={prediction}>
            <p className='box-text'>{prediction}</p>
          </div>
        </div> :
        null
      }
    </div>

  )
}

export default Team