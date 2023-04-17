import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Navigate to='/' />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
