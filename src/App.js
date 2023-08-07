import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Router from './Router';
import SignIn from './SignIn';
import Help from './Help';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
        <Nav/>
      <Routes>
        <Route path="" element={<Router/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Help' element={<Help/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
