const Item = ({ item }) => {
  return (
    <div>
      <img src={item.img} />
      <p>{item.price}</p>
    </div>
  );
};
