import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-div">
      <h1>Search</h1>
      <form>
        <input className="searchbox" onChange={(e)=>{
            props.setSearch(e.target.value)
        }}></input>
      </form>
    </div>
  );
}
