import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Tabby from './pages/Tabby';
import Beagle from './pages/Beagle';
import AllBreeds from './pages/AllBreeds';
import Boxer from './pages/Boxer';
import Dachshund from './pages/Dachshund';
import Border from './pages/Border';
import Rottweiler from './pages/Rottweiler';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allBreeds" element={<AllBreeds />} />
          <Route path="/tabby" element={<Tabby />} />
          <Route path="/beagle" element={<Beagle />} />
          <Route path="/allBreeds" element={<AllBreeds />} />
          <Route path="/boxer" element={<Boxer />} />
          <Route path="/dachshund" element={<Dachshund />} />
          <Route path="/border" element={<Border />} />
          <Route path="/rottweiler" element={<Rottweiler />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
