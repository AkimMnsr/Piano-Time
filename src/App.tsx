import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { HomePage } from './views/HomePage';
import { PianoView } from './views/piano/PianoView';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Piano' element={<PianoView />} />
      </Routes>
    </Router>
  );
}

export default App;
