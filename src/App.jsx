import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import HeaderPicture from './components/HeaderPicture'
import LogoLink from './components/BrandLogo'
import TopProducts from './components/TopProducts'
import BestSellerProducts from './components/BestSellerProducts'
import FeaturedProduct from './components/FeaturedProduct'
import ServiceSection from './components/ServiceSection'
import FeaturedPost from './components/FeaturedPost'
import Footer from './layout/Footer'
import { BrowserRouter } from 'react-router-dom'
import PageContent from './layout/PageContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
     <Header />
     <PageContent/>
     <Footer/>
    </>
    </BrowserRouter>
  )
}

export default App