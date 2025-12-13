import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Products from './Products/Products.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    
  })
  return (
    <>
      <Header/>
      <Hero/>
      <Products/>
    </>
  )
}

export default App
