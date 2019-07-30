import React from "react";
import "../style.css";

function SearchList(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Good Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchList;