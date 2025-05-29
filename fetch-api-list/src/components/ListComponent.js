import React from 'react';

/**
 * Reusable and accessible list component
 * @param {Array} items - Items to render
 * @param {Function} renderItem - Function to render each item
 * @param {Function|string} keyExtractor - Unique key for each item (function or string)
 */
const ListComponent = ({ items, renderItem, keyExtractor }) => {
  if (!items || items.length === 0) {
    return <p role="alert">No items available.</p>;
  }

  return (
    <ul aria-label="Item list">
      {items.map((item, index) => {
        const key = typeof keyExtractor === 'function'
          ? keyExtractor(item)
          : item[keyExtractor] ?? index;

        return (
          <li key={key}>
            {renderItem(item)}
          </li>
        );
      })}
    </ul>
  );
};

export default ListComponent;
