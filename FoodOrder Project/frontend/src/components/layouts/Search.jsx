import React from 'react'
import {FaSearch } from "react-icons/fa";
export default function Search() {
  return (
    <form>
      <div className="input-group">
       <input type="text" placeholder="search your favourite resturant" id="search_field"
       className="form-control"/>
       <div className="input-group-append">
        <button id="seacrh_btn" className="btn">
        <FaSearch className="fa/FaSearch" />
        </button>
       </div>

      </div>
    </form>
  );
}
