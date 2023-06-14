import React, { useState } from 'react';
import './ShoppingCart.css';


const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: itemName,
        price: itemPrice
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemPrice('');
      setShowForm(false);
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {showForm ? (
        <div>
          <h2>Add Item</h2>
          <div>
            <label htmlFor="itemName">Name: </label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="itemPrice">Price: </label>
            <input
              type="number"
              id="itemPrice"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <button onClick={addItem}>Add to Cart</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Item</button>
      )}
    </div>
  );
};

export default ShoppingCart;
