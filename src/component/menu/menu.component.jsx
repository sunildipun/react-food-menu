import React from 'react';
import './menu.style.css';

const Menu = ({items}) => {
    
    return (
        <div className="section-center">
            {
                items.map((menu, index) => {
                    return(
                        <article key={index} className="menu-item">
                          <img src={menu.img} alt={menu.title} className="photo" />
                            <div className="item-info">
                            <header>
                                <h4>{menu.title}</h4>
                                <h4 className="price">{menu.price}</h4>
                            </header>
                            <p className="item-text">{menu.desc}</p>
                            </div>
                        </article>
                    )
                    }
                )
            }
        </div>
    )
}

export default Menu;
