// src/pages/index.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index';
import ArtCad from './pages/artCad';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artCad" element={<ArtCad />} />
      </Routes>
    </Router>
  );
}
