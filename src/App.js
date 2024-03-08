import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
import Pnf from './Pages/Pnf'


function App() {
  return (
    <BrowserRouter>
     <Menu/>
     <ToastContainer autoClose={4000} position={'bottom-right'}/>
     <Routes>
       <Route path={`/`} element={<Home/>} />
       <Route path={`/user/create`} element={<Create/>} />
       <Route path={`/user/edit/:id`} element={<Update/>} />
       <Route path={`/*`} element={<Pnf/>} />

     </Routes>
    </BrowserRouter>
  )
}

export default App