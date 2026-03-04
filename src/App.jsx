import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Location from './pages/Location'
import Reservation from './pages/Reservation'
import News from './pages/News'
import ScrollToTop from './ScrollToTop'
import Shrestha_Cafe_Grand_Opening from './pages/Blog_page/Shrestha_Cafe_Grand_Opening'

function App() {
  return (
    <>

        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/reservation' element={<Reservation />}></Route>
            <Route path='/news' element={<News />}></Route>
            <Route path='/news/shrestha-cafe-grand-opening' element={<Shrestha_Cafe_Grand_Opening />}></Route>
            <Route path='/location' element={<Location />}></Route>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
