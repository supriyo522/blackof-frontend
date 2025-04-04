import React from "react";
import './List.css'; // Import the external CSS file

const List = ({ data }) => {
  return (
    <>
      {data.map((link) => (
        <div key={link.id} className="list-category">
          <h3 className="category-title">{link.category}</h3>
          <ul className="link-list">
            {link.links.map((item) => (
              <li className="link-item" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default List;
