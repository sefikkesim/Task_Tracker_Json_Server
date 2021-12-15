import React from 'react'
import Style from "../styles/BaseFilter.css";

function BaseFilter({ handleFilter, currentFilter }) {
  return (
    <nav className="filter-nav">
      <button
        className={(navData) => navData.isActive && "active"}
        onClick={() => handleFilter("all")}
      >
        View All
      </button>
      <button
        className={(navData) => navData.isActive && "active"}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </button>
      <button
        className={(navData) => navData.isActive && "active"}
        onClick={() => handleFilter("pending")}
      >
        Pending
      </button>
    </nav>
    // <nav className="filter-nav">
    //   <button
    //     className={(navData) => navData.isActive && "active"}
    //     onClick={() => updateFilterHandler("all")}
    //   >
    //     View All
    //   </button>
    //   <button
    //     cclassName={(navData) => navData.isActive && "active"}
    //     onClick={() => updateFilterHandler("completed")}
    //   >
    //     Completed
    //   </button>
    //   <button className={(navData) => navData.isActive && "active"} onClick={() => updateFilterHandler("pending")}>Pending</button>
    // </nav>
  );
}

export default BaseFilter
