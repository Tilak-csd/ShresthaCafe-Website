import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Reservation from './pages/Reservation'
import News from './pages/News'

function App() {
  return (
    <>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/reservation' element={<Reservation />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/location' element={<Location />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
