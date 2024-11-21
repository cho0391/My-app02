import React, { useState } from 'react';

function FormEx(props) {
  
  const [userName, setUserName] = useState("test")
  const [isSubScribed, setSubScribed] = useState(false)
  const roles = ['user', 'admin', 'guest']
  const [role, setRole] = useState(roles[0])

  return (
    <form>
      <p>Name : {userName} {isSubScribed && '(SubScribed)'}</p>
      <p>Role : {role}</p>
      <p>
      <input 
        type='text'
        placeholder='userName'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      </p>
      <p>
      <input
        type='checkbox'
        checked={isSubScribed}
        onChange={(e)=>setSubScribed(e.target.checked)}
      />
      <label>SubScribed</label>  
      </p>
      <p>
        <select 
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        >
          {roles.map((k, index)=>(
            <option
              key={index}
              value={k} >
                {k}
            </option>

          ))}
        </select>  
      </p>
    </form>
  );
}

export default FormEx;