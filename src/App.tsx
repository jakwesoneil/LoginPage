
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Idk from './idk';


function App() {
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-zinc-600 bg-cover '>
      <Routes>
        <Route path = 'login' element= {<Login/>}/>
        <Route path = 'register' element= {<Register/>}/>
        <Route path = 'idk' element= {<Idk/>}/>
      </Routes>
      {/*bg-zinc-700 and 950*/}
    </div>
  );
}

export default App;