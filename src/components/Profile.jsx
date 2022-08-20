import { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Profile = () => {
    const {setInputs}=useContext(LoginContext)
  return (
<>
<h1>Profile</h1>
<h1>Username: </h1>
</>
  )
}

export default Profile