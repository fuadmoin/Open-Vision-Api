import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Tabby from './component/Tabby';
import Beagle from './component/Beagle';
import AllBreeds from './component/AllBreeds';
import Boxer from './component/Boxer';
import Dachshund from './component/Dachshund';
import Border from './component/Border';
import Rottweiler from './component/Rottweiler';

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
