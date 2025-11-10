import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeaderPicture from './components/HeaderPicture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <HeaderPicture/>
    </>
  )
}

export default App
