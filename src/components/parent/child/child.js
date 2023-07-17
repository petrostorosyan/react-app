import React, { useEffect, useState } from "react";
import css from "./child.module.css";
import axios from "axios";

const Child = (props) => {
  const name = localStorage.setItem("name", "andrei");

  const [inpValue, setInpValue] = useState("");
  //   const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [showData, setShowData] = useState("");
  const [hide, setHide] = useState(false)

  const dataFromBack = async (value) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const results = response.data.filter((el) => {
        if (el.username.toLowerCase() === value) {
          setInpValue(value);
          setInfo(el);          
        } 
      });
    } catch (error) {
      console.log(error);
    }
  };

  const search = (e) => {
    setInpValue(e.target.value);
    dataFromBack(e.target.value);
  };

  useEffect(() => {
    
      if(inpValue === info.username) {
        setShowData("you found user");
        setHide(true);
    } else {
        setShowData("search user");
        setInfo({});
      }
    
  }, [inpValue]);

  useEffect(() => {
    if(info.name) {
        setShowData("you found user");
    } else {
        setShowData("search user");
      }
  }, [info]);

  return (
    <div className={css.childContainer}>
      <h1>Child</h1>
      <p>{name}</p>
      <p>{props.name}</p>

      <div className={css.searchBox}>
        <form>
          <input
            className={css.input}
            placeholder="Type To Search..."
            onChange={search}
          />
        </form>

        <div className={css.infoPart}>
          <div className={css.infoBox}>
            <div className={css.infoName}>Id:</div>
            <div className={css.infoProperty}>{info.id}</div>
          </div>

          <div className={css.infoBox}>
            <div className={css.infoName}>Name:</div>
            <div className={css.infoProperty}>{info.name}</div>
          </div>

          <div className={css.infoBox}>
            <div className={css.infoName}>Phone:</div>
            <div className={css.infoProperty}>{info.phone}</div>
          </div>

          <div className={css.infoBox}>
            <div className={css.infoName}>Email:</div>
            <div className={css.infoProperty}>{info.email}</div>
          </div>

          <div className={css.infoBox}>
            <div className={css.infoName}>City:</div>
            <div className={css.infoProperty}>{info.address?.city}</div>
          </div>

          <div className={css.infoBox}>
            <div className={css.infoName}>Street:</div>
            <div className={css.infoProperty}>{info.address?.street}</div>
          </div>
          <div>{showData}</div>
        </div>
      </div>
    </div>
  );
};

export default Child;
