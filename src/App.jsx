import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeaderPicture from './components/HeaderPicture'
import LogoLink from './components/BrandLogo'
import TopProducts from './components/TopProducts'
import BestSellerProducts from './components/BestSellerProducts'
import FeaturedProduct from './components/FeaturedProduct'
import ServiceSection from './components/ServiceSection'
import FeaturedPost from './components/FeaturedPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <HeaderPicture/>
     <LogoLink />
     <TopProducts />
     <BestSellerProducts/>
     <FeaturedProduct/>
     <ServiceSection/>
     <FeaturedPost/>
    </>
  )
}

export default App