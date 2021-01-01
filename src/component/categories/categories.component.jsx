import React, { useState } from 'react';
import './categories.style.css';

const Categories = ({categories, filterItems}) => {
    const [selectedCategory, setCategory] = useState(categories[0]);
    return (
        <div className="catogories">
            {
                categories.map((category, index) => (
                    <button className={`${selectedCategory === category ? 'active': ''} btn`} key={index} onClick={() => {filterItems(category); setCategory(category)}}>{category}</button>
                ))
            }
        </div>
    )
}

export default Categories
