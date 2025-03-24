import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';

import Delete from './components/Delete';
import Edit from './components/Edit';
import Create from './components/Create';

const App = () => {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App