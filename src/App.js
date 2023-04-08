import React from 'react'
import './App.css'
import Home from './component/Home'
import Next from './component/Next'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/success'  exact element={<Next/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App