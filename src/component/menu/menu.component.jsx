import React from 'react';
import './menu.style.css';

const Menu = ({items}) => {
    
    return (
        <div>
            {
                items.map((menu, index) => {
                    return(
                        <article key={index}>
                            <p>{menu.title}</p>
                        </article>
                    )
                    }
                )
            }
        </div>
    )
}

export default Menu;
