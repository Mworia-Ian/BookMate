import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favourite from "./components/pages/Favourite"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favourite" element={<Favourite/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App