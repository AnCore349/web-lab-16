import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    setSelectedCategory(category);
    setMenuItems(
      category === 'all'
        ? items
        : items.filter((item) => item.category === category)
    );
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
