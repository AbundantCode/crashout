import { itemData } from "./data";
import Item from "./Item";
import "./store.css";

const Store = () => {
  return (
    <div className="storeCont">
      <h1>Buy Now</h1>
      <div className="storeItems">
        {itemData.map((item) => (
          <Item key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Store;
