import { useState } from 'react';

import Login from './components/Login';
import Profile from './components/Profile'

import {LoginContext}from './Contexts/LoginContext'

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [inputs, setInputs] = useState({ username: '', password: '' });

  return (
    <div className='container'>
      <LoginContext.Provider value={{inputs,setInputs,setShowProfile}} >
      <h1>Login Template #1 </h1>
        {showProfile ?<Profile/>:<Login/>}
      </LoginContext.Provider>

    </div>
  );
}

export default App;
