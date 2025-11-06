import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Entities from "./pages/Entities.jsx"


function App() {
  return (
    <BrowserRouter>
      <Navbar />


      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entities" element={<Entities />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App