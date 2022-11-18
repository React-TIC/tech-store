import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

      {/* En el Router agregamos la barra de navegación */}
      <Router>
        <Navbar />
      </Router>
      
    </div>
  );
}

export default App;
