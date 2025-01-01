import { useState } from 'react'
import MovieCard from './components/MovieCard'
import './css/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import {MovieProvider} from "./contexts/MovieContext"
import Navbar from './components/Navbar'
import Seen from "./pages/Seen"
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch-list" element={<Favorites />} />
        <Route path="/seen" element={<Seen/> } />
      </Routes>

    </main>
    <Footer/>
    </MovieProvider>
  )
}

export default App
