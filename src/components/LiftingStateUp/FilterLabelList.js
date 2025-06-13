import React, { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterLabelList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItems(foods, query); // 🔍 use query to filter

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <hr />
      <List items={filteredItems} />
    </div>
  );
}

function SearchBar({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value); // 🛠️ fix: use e.target.value (not e.targetValue)
  }

  return (
    <div>
      <label>
        Search: {''}
        <input value={query} onChange={handleChange} />
      </label>
    </div>
  );
}

function List({ items }) {
  return (
    <div>
      <table>
        <tbody>
          {items.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
