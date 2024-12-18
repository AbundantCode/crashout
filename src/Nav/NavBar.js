import logo from "./crashoutblack.png";
import "./navBarStyles.css";
import HamMenu from "./hamMenu";
import cartImg from "./cart.png";
import { useCart } from "../State/storeState";

const Navbar = () => {
  const { cart } = useCart();
  return (
    <div className="navBarStyles">
      <HamMenu />
      <img src={logo} />
      <div className="cartCont">
        <img className="cart" src={cartImg} />
        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </div>
    </div>
  );
};

export default Navbar;
