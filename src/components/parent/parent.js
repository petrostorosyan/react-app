import React from "react";
import { Link } from "react-router-dom";
import css from "./parent.module.css";

const Parent = () => {

    const data = localStorage.getItem('name');

  return (
    <div className={css.parentContainer}>
      <h1>Parent</h1>
      <p>{data}</p>
      <button className={css.routeClick}>
        <Link className={css.route} to="/parent/child">Route to child</Link>
      </button>
      
      {/* <Child name='lola' /> */}
    </div>
  );
};

export default Parent;
