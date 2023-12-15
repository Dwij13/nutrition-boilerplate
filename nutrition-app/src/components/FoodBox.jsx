import React, { useState } from "react";
import "./FoodBox.css";
export default function FoodBox(props) {
 
    const [count,setCount] = useState(0)
    const [Calories,setCal] = useState(0)
 
    return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.img} width={65} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.cal} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number"  placeholder="Enter a number here" onChange={(e)=>{
                    setCount(e.target.value)
                }} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={()=>{
                    setCal(count*props.cal)
                }}>+</button>
              </div>
            </div>
          </div>
        </article>
        <div className="right-data">
            <p>
                <strong>{count}  </strong>
                <strong>{props.name}  </strong>
                <strong>--   </strong>
                <strong>{Calories} Calories</strong>
            </p>
            <button className="reset" onClick={()=>{
                setCount(0)
                setCal(0)
            }}>Reset</button>
        </div>
      </div>
    </>
  );
}
