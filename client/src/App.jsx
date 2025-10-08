
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Navs from './Components/Navbar'
import Signup from './Page/Signup'
import Login from './Page/Login'

function App() {
  return (
    <>
    <Navs/>
    <Routes>
        <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>

    </Routes>

    </>

  )
}

export default App
