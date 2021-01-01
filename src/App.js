import { useState } from 'react';
import './App.css';

import Menu from './component/menu/menu.component';
import Categories from './component/categories/categories.component';

import menu from './data.js';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  // const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  return (
    <section className="container">
    <div className="content">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={allCategories} filterItems={filterItems}/>
      <Menu  items={menuItems}/>
    </div>
    </section>
  );
}

export default App;
