import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Test from './pages/Test/Test'

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      english: "Apple",
      uzbek: "Olma",
      category: "Fruits"
    },
    {
      id: 2,
      english: "Book",
      uzbek: "Kitob",
      category: "Education"
    },
    {
      id: 3,
      english: "Beautiful",
      uzbek: "Chiroyli",
      category: "Adjectives"
    },
    {
      id: 4,
      english: "Run",
      uzbek: "Yugurmoq",
      category: "Verbs"
    },
    {
      id: 5,
      english: "House",
      uzbek: "Uy",
      category: "Places"
    },
    {
      id: 6,
      english: "Friend",
      uzbek: "Do'st",
      category: "People"
    },
    {
      id: 7,
      english: "Water",
      uzbek: "Suv",
      category: "Nature"
    },
    {
      id: 8,
      english: "Happy",
      uzbek: "Xursand",
      category: "Emotions"
    },
    {
      id: 9,
      english: "Computer",
      uzbek: "Kompyuter",
      category: "Technology"
    },
    {
      id: 10,
      english: "School",
      uzbek: "Maktab",
      category: "Education"
    }
  ])
  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/add' element={<Add data={data} setData={setData} />} />
          <Route path='/test' element={<Test data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App