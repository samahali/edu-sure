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
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

