import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <Router>

      <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/register" element={<Register/>} />
      
      </Routes>
    </Router>
    
    );
  
};

export default App;