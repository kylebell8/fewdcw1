import React from "react";

const List = ({locations}) => {
  return (
    <div className="List">
      <p>We have restaurants in</p>
      <ul>
          {locations.map((location) => (
            <li key={location.id}>
             {location.location}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default List;
