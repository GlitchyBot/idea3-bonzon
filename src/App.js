import NavBar from "./components/header/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/body/itemList/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Disculpe la molestias, estamos renovando la tienda!" />
    </div>
  );
}

export default App;
