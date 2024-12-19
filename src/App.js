import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/policy/privacyPolicy";
import ProductPage from "./Components/product/productPage";
import Store from "./Components/store/storePage";
import Navbar from "./Nav/NavBar";
import CartPopup from "./Components/checkout.js/cartPop";
import { useCart } from "./State/storeState";
import ViewCart from "./Components/checkout.js/viewCart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const subtotal = Math.round(
    cart.reduce((acc, item) => item.price * cart.length, 0)
  );
  return (
    <div className="App">
      <header className="App-header">
        <Navbar setCartOpen={setCartOpen} />
        <CartPopup
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cart}
          subtotal={subtotal}
        />
        <Routes>
          <Route exact path="/" Component={Store} />
          <Route path="/policy" Component={PrivacyPolicy} />
          <Route path="/product/:id" Component={ProductPage} />
          <Route path="/cart" Component={ViewCart} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
