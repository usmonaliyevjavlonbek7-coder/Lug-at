import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Test from './pages/Test/Test'
import Infos from './pages/Infos/Infos'

function App() {
  const defaultData = [
    { id: 1, english: "Apple", uzbek: "Olma", category: "Fruits", learned: false },
    { id: 2, english: "Book", uzbek: "Kitob", category: "Education", learned: false },
    { id: 3, english: "Beautiful", uzbek: "Chiroyli", category: "Adjectives", learned: false },
    { id: 4, english: "Run", uzbek: "Yugurmoq", category: "Verbs", learned: false },
    { id: 5, english: "House", uzbek: "Uy", category: "Places", learned: false },
    { id: 6, english: "Friend", uzbek: "Do'st", category: "People", learned: false },
    { id: 7, english: "Water", uzbek: "Suv", category: "Nature", learned: false },
    { id: 8, english: "Happy", uzbek: "Xursand", category: "Emotions", learned: false },
    { id: 9, english: "Computer", uzbek: "Kompyuter", category: "Technology", learned: false },
    { id: 10, english: "School", uzbek: "Maktab", category: "Education", learned: false }
  ]


  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('lugat-data')
      return saved ? JSON.parse(saved) : defaultData
    } catch {
      return defaultData
    }
  })

  useEffect(() => {
    localStorage.setItem('lugat-data', JSON.stringify(data))
  }, [data])

  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} setData={setData} />} />
          <Route path='/add' element={<Add data={data} setData={setData} />} />
          <Route path='/test' element={<Test data={data} />} />
          <Route path='/info' element={<Infos data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
