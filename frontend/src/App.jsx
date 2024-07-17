import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favourite from "./components/pages/Favourite"
import ContactUsPage from "./components/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/contact" element={<ContactUsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App