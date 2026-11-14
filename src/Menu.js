import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map(({ id, title, category, price, img, desc }) => (
        <article className="menu-item" key={id}>
          <img className="photo" src={img} alt={title} />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price.toFixed(2)}</h4>
            </header>
            <p className="item-text">{desc}</p>
            <span className="item-category">{category}</span>
          </div>
        </article>
      ))}
      {items.length === 0 && <p className="empty-menu">No menu items found.</p>}
    </div>
  );
};

export default Menu;
