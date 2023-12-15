import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import food from "./../resources/FoodData";
import Search from "./components/Search";

export default function App() {
  console.log(food);
  const[search,setSearch]= useState("")
  const filtered = food.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <>
      <Search setSearch={setSearch} /> 
      {filtered.length>0?(filtered.map((item) => {
        return (<FoodBox img={item.img} cal={item.cal} name={item.name}/>)
      })):(<h1>NO ITEM FOUND</h1>)}
    </>
  );
}

