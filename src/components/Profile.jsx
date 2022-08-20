import { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

const Profile = () => {
    const {inputs:{username},setInputs, setShowProfile}=useContext(LoginContext)
  return (
<>
<h1>Profile</h1>
<h1>Username:{username} </h1>
<button onClick={()=> {setShowProfile(false);setInputs({username:'',password:''});}}>Logout</button>
</>
  )
}

export default Profile