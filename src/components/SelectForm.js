import React from "react";

const SelectForm = ({teams, selectTeam}) => (
  <form className='form3'>
    <label className='text-t'>Select team:</label>
    <select name='my_select' id='team_select' onChange={selectTeam}>
      <option></option>
      {teams.map(t => (
        <option key={t}>{t}</option>
      ))}
    </select>
  </form>
)

export default SelectForm