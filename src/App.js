import './App.css';
import Home from './components/Home';
import Information from './components/Information'
import Contact from './components/Contact'
import Guide from './components/Guide'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/information" element={<Information/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/guide" element={<Guide/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
