import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route exact path='/crear-personaje' element={<Form/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
