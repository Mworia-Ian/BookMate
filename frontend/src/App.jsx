import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import HomePage from './pages/HomePage';
import AddBook from './pages/AddBook';
import Favourite from './pages/Favourite';
import Contact from './pages/Contact';
import { FavoritesProvider } from "./pages/Favourite";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;