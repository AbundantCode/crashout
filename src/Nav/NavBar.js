import logo from "./crashoutblack.png";
import "./navBarStyles.css";
import HamMenu from "./hamMenu";
import cart from "./cart.png";

const Navbar = () => {
  return (
    <div className="navBarStyles">
      <HamMenu />
      <img src={logo} />
      <img className="cart" src={cart} />
    </div>
  );
};

export default Navbar;
