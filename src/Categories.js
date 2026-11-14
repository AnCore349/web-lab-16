import React from 'react';

const Categories = ({ categories, selectedCategory, filterItems }) => {
  return (
    <div className="btn-container" aria-label="Filter menu by category">
      {categories.map((category) => (
        <button
          className={`filter-btn${selectedCategory === category ? ' active' : ''}`}
          key={category}
          type="button"
          aria-pressed={selectedCategory === category}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
