import { Link, Outlet } from "react-router-dom";
import css from "./products.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const Product = () => {
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);

  const getData = async () => {
    try {
      setload(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      setload(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={css.productsContainer}>
      <Link to="tablets">Tablets</Link>
      <Link to="phones">Phones</Link>
      <Link to="clothes">Clothes</Link>
      <Outlet />
      <h1>Product</h1>

      {load && (
        <div className={css.loader}>
          <Triangle
            height="120"
            width="120"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}

      {data.map((el) => {
        return (
          <div key={el.id} className={css.item}>
            <h3 className={css.title}>{el.title}</h3>
            <img className={css.img} src={el.image} alt="img" />
            <p className={css.description}>{el.description}</p>
            <div className={css.priceBox}>
              <p className={css.price}>Price: {el.price}$</p>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Product;
