import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import SearchComp from '../Components/SearchComp'
import Home from '../Pages/Home'

const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default MainRoute