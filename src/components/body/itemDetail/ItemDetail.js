import { ItemsCount } from "../itemsCount/ItemsCount";

export const ItemDetail = ({ product, setModalIsOpen }) => {
  const onAdd = (qty) => {
    alert(`Se agregaron ${qty} al carrito!`);
    setModalIsOpen(false);
  };

  return (
    <div className="itemDetail">
      <button className="closeButton" onClick={() => setModalIsOpen(false)}>
        X
      </button>
      <img src={product.img} alt="product" />
      <h2>{product.name}</h2>
      <h4>{product.author}</h4>
      <h3>${product.price}</h3>
      <ItemsCount stock={product.stock} initial={1} onAdd={onAdd} />
    </div>
  );
};
