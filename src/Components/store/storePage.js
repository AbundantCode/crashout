import { Link } from "react-router-dom";
import { itemData } from "../data";
import Item from "./Item";
import "./store.css";

const Store = () => {
  return (
    <div className="storeCont">
      <h1>Buy Now</h1>
      <div className="storeItems">
        {itemData.map((item) => (
          <Link to={`/product/${item.id}`}>
            <Item key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Store;
