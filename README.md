## Login Template 1 with ContextAPI State Management

A basic login with username and password. If the user is logged in then show the profile. If the user logs out show the login page. This doesn't not have any validation, authentication or storage


## Set up ContextAPI

- Create folder named `Contexts`
- Create a file named `LoginContext.js`
- Add to file
  ```javascript
  import { createContext } from 'react';
  export const LoginContext = createContext({});
  ```
- import `LoginContext` into Higher Order Component (Parent)
- Wrap components that are getting the state with

  ```javascript
  return (
    <div className='container'>
      <LoginContext.Provider>
        <h1>Login Template #1 </h1>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
  ```

- Remove unnecessary local useState place any useState hooks in `App.js` (HOC)
- Pass state values into provider as props
  ```javascript
  return (
    <div className='container'>
      <LoginContext.Provider value={{ inputs, setInputs, setShowProfile }}>
        <h1>Login Template #1 </h1>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
  ```
- In the `Login.jsx` child component bring in the `useContext` hook and import the context file
  ```javascript
  import { useContext } from 'react';
  import { LoginContext } from '../Contexts/LoginContext';
  ```
- Implement the `useContext` hook just like using `useState`.

  ```javascript
  const { inputs, setInputs, setShowProfile } = useContext(LoginContext);
  ```
