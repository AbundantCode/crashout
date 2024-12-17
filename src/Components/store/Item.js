import "./store.css";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="itemCont">
      <img src={item.img} />
      <p>{item.price}</p>
    </div>
  );
};

export default Item;
