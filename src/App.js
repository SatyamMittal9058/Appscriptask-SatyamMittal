import { useState } from 'react';
import './App.css';
import HomePage from './component/HomePage';
import UserContext from './utils/userContext';
function App() {
  const [toggle, setToggle]=useState(false);
  return (
    <UserContext.Provider value={{toggle, setToggle}}>
    <div className="App">
        <HomePage />
    </div>
    </UserContext.Provider>
  );
}

export default App;
