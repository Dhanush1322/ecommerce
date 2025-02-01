import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './pages/index'; // Importing Index component
import Product from './pages/product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Product />} />
      
      </Routes>
    </Router>
  );
}

export default App;
