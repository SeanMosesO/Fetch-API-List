import React from 'react';

const ItemList = ({ items, renderItem }) => {
  if (!items.length) return <p>No items to display.</p>;
  
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
