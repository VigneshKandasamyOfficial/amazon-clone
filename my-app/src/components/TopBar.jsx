import React from "react";
import "../App.css";

function TopBar(props) {
  const handleCategorySelection = (e) => {
    props.setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <div className="topbar">
      <select onChange={handleCategorySelection}>
        <option value="">All</option>
        {props.category.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={handleSearch}
        className="search-bar"
      />
    </div>
  );
}

export default TopBar;
