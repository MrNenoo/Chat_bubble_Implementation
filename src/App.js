import React from 'react'
import './App.css'
import Home from './component/Home'
import Next from './component/Next'
import Login from './Login/Login'
import Signup from './signup/Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgetPassword from './Forget_Password/ForgetPassword'


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/success'  exact element={<Next/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/forget_password' exact element={<ForgetPassword/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App