import CartWidget from "../cartIcon.js/CartWidget";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <h2 className="logo">Tienda</h2>
      <ul className="navbarMenu">
        <li className="navbarItem">
          <a href="#">Home</a>
        </li>
        <li className="navbarItem dropdown">
          <a href="#">Productos</a>
        </li>
        <li className="navbarItem">
          <a href="#">Sucursales</a>
        </li>
        <li className="navbarItem">
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
