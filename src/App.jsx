import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeaderPicture from './components/HeaderPicture'
import LogoLink from './components/BrandLogo'
import TopProducts from './components/TopProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <HeaderPicture/>
     <LogoLink />
     <TopProducts />
    </>
  )
}

export default App