import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Products from './Products/Products.jsx'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Signup/SignUp.jsx'
import Login from './Login/Login.jsx'
import Home from './Home.jsx'
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
