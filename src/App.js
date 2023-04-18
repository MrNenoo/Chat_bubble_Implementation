import React from 'react'
import './App.css'
import Login from './Login/Login'
import Signup from './signup/Signup'
import ResetPassword from './Forget_Password/Reset_Password'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgetPassword from './Forget_Password/ForgetPassword'
import ProtectedRoute from './protected/ProtectedRoute'
import Profile from './profile/Profile'


const App = () => {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/' element={<ProtectedRoute/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/forget_password' exact element={<ForgetPassword/>}/>
        <Route path='/reset_password/:token' exact element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App