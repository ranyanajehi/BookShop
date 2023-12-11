import React from 'react'
import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Update from './pages/Update.jsx';
import Books from './pages/Books.jsx';
import Add from './pages/Add.jsx';
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
