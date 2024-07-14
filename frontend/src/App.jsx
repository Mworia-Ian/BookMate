import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContactUsPage from "./components/pages/contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactUsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App