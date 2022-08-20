import { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';


const Login = () => {
//   const [inputs, setInputs] = useState({ username: '', password: '' });
//   const [showProfile, setShowProfile] = useState(false);
const {inputs, setInputs,setShowProfile}=useContext(LoginContext)

  console.log(inputs);
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <input
        type='text'
        name='username'
        value={inputs.username}
        placeholder='username...'
        onChange={onChange}
      />
      <input
        type='text'
        name='password'
        value={inputs.password}
        placeholder='Password...'
        onChange={onChange}
      />
      <button onClick={() => setShowProfile(true)}>Login Here</button>
      {/* {showProfile && <h2>{inputs.username}</h2>} */}
    </>
  );
};

export default Login;
