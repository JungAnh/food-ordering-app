import { BrowserRouter, Route, Routes } from "react-router-dom";
import  {Header}  from "../Component/Header";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Menu from "../Page/Menu";
import Cart from "../Page/Cart";
import PaymentSuccess from "../Page/PaymentSuccess";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlide";
import { Footer } from "../Component/Footer";

const Navigation = () => {
const productsInCart = useSelector(cartProducts)

  return(
    <BrowserRouter>
      <Header cartCount={ productsInCart ? productsInCart.length : 0}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation;