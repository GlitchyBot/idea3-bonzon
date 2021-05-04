import { useState } from "react";
import { ItemDetailContainer } from "../itemDetail/ItemDetailContainer";

export const Item = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="productWrapper" onClick={() => setModalIsOpen(true)}>
        <img src={product.img} alt="product" />
        <h2>{product.name}</h2>
        <h4>{product.author}</h4>
        <h3>${product.price}</h3>
      </div>
      {modalIsOpen ? (
        <ItemDetailContainer setModalIsOpen={setModalIsOpen} />
      ) : null}
    </>
  );
};
