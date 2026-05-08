import { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import shoppingItems from "../data/items";

function App() {
  const [items, setItems] = useState(shoppingItems);

  function handleItemFormSubmit(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;