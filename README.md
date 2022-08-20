Login Template 1

Set up ContextAPI

- Create folder named Contexts
- Create a file named LoginContext.js
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

- Remove unnecessary local useState
- Pass state values into provider as props
```javascript
 return (
    <div className='container'>
      <LoginContext.Provider value={{inputs,setInputs}} >
      <h1>Login Template #1 </h1>
        {showProfile ?<Profile/>:<Login/>}
      </LoginContext.Provider>
    </div>
  );
```
