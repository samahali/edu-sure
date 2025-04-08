import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/edu-sure/" element={<Home />} />
        <Route path="/edu-sure/courses" element={<Courses />} />
        <Route path="/edu-sure/cart" element={<Cart />} />
        <Route path="/edu-sure/login" element={<Login />} />
        <Route path="/edu-sure/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

