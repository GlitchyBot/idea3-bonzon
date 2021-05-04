import cartIcon from "../../../assets/cart.png";

const CartWidget = () => {
  return (
    <a href="#">
      <img className="cartIcon" src={cartIcon} alt="carrito" />
    </a>
  );
};

export default CartWidget;
