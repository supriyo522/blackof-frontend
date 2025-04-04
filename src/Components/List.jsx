import React from "react";
const List = ({ data }) => {
  return (
    <>
      {data.map((link) => (
        <div key={link.id}>
          <h3 className="font-bold text-black">{link.category}</h3>
          <ul className="mt-5 space-y-5">
            {link.links.map((item) => (
              <li className="hover:text-gray-800 cursor-pointer text-gray-500" key={item.id}>
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
