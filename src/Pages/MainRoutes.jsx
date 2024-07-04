import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Recipes from './Recipes'
import Pastafrola from './Pastafrola'
import Chipa from './Chipa'
import TortaFrita from './TortaFrita'
import Tradition from './Tradition'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route  path='/recipes' element={<Recipes/>}/>  
        <Route path='/pastafrola' element={<Pastafrola/>}/>
        <Route path='/chipa' element={<Chipa/>}/>
        <Route path='/tortafrita' element={<TortaFrita/>}/>
        <Route path='/tradition' element={<Tradition/>}/>
    </Routes>
  )
}

export default MainRoutes