import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favourite from "./components/pages/Favourite"
import ContactUsPage from "./components/pages/Contact"
import Home from "./components/pages/Home"
import Review from "./components/pages/Review"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/review" element={<Review/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App