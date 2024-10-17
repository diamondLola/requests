import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home'
import ProductsPage from './pages/products'
import SinglePage from './pages/single'
import CreatePage from './pages/create'
import Navbar from './components/nav'
import Footer from './components/footer'
function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/products/:id' element={<SinglePage/>} />
        <Route path='/create' element={<CreatePage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
