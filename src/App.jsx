import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Test from './pages/Test/Test'
import Infos from './pages/Infos/Infos'

function App() {
  const boshlangichSozlar = [
    { id: 1, inglizcha: "Apple", ozbekcha: "Olma", kategoriya: "Fruits", yodlangan: false },
    { id: 2, inglizcha: "Book", ozbekcha: "Kitob", kategoriya: "Education", yodlangan: false },
    { id: 3, inglizcha: "Beautiful", ozbekcha: "Chiroyli", kategoriya: "Adjectives", yodlangan: false },
    { id: 4, inglizcha: "Run", ozbekcha: "Yugurmoq", kategoriya: "Verbs", yodlangan: false },
    { id: 5, inglizcha: "House", ozbekcha: "Uy", kategoriya: "Places", yodlangan: false },
    { id: 6, inglizcha: "Friend", ozbekcha: "Do'st", kategoriya: "People", yodlangan: false },
    { id: 7, inglizcha: "Water", ozbekcha: "Suv", kategoriya: "Nature", yodlangan: false },
    { id: 8, inglizcha: "Happy", ozbekcha: "Xursand", kategoriya: "Emotions", yodlangan: false },
    { id: 9, inglizcha: "Computer", ozbekcha: "Kompyuter", kategoriya: "Technology", yodlangan: false },
    { id: 10, inglizcha: "School", ozbekcha: "Maktab", kategoriya: "Education", yodlangan: false }
  ]

  const [sozlar, setSozlar] = useState(() => {
    try {
      const saqlangan = localStorage.getItem('lugat-sozlar')
      return saqlangan ? JSON.parse(saqlangan) : boshlangichSozlar
    } catch {
      return boshlangichSozlar
    }
  })

  useEffect(() => {
    localStorage.setItem('lugat-sozlar', JSON.stringify(sozlar))
  }, [sozlar])

  return (
    <div className='body'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home sozlar={sozlar} setSozlar={setSozlar} />} />
          <Route path='/add' element={<Add setSozlar={setSozlar} />} />
          <Route path='/test' element={<Test sozlar={sozlar} />} />
          <Route path='/info' element={<Infos sozlar={sozlar} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
