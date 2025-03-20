import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Conditional from './components/Conditional';
import List from './components/List';
import Props from './components/Props';


const App = ()=>{
 
  return(
    <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/Conditional" element={<Conditional/>} ></Route>
              <Route path='/list' element={<List/>}></Route>
              <Route path='/props' element={<Props/> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;