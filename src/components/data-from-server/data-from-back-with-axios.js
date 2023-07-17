import { useEffect, useState } from "react";
import css from "./data-from-back-with-axios.module.css";
import axios from "axios";
import { HashLoader } from "react-spinners";

const DataFromBack = () => {
  const [data, setData] = useState([]); 
  const [loader, setLoader] = useState(true); 

  const getData = async () => {
    try {
      setLoader(true);
      const info = await axios.get("https://jsonplaceholder.typicode.com/users");
    //   console.log(info.data);
      setData(info.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={css.dataContainer}>
        
        {loader && (
        <div className={css.loader}>
            <HashLoader color="#36d7b7" 
              size={100}  
              speedMultiplier={2}
            />
        </div>
        )}
      {data.map((el, index) => {
        return (
          <div key={el.id} className={css.content}>
            <h1 className={css.title}>Title</h1>
            <p className={css.paragraph}>id: {el.id}</p>
            <p className={css.paragraph}>name: {el.name}</p>
            <p className={css.paragraph}>username: {el.username}</p>
            <p className={css.paragraph}>email: {el.email}</p>
            <p className={css.paragraph}>city: {el.address.city}</p>
            <p className={css.paragraph}>phone: {el.phone}</p>
            <p className={css.paragraph}>website: {el.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DataFromBack;
