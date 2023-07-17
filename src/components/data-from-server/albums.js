import { useEffect, useState } from "react";
import css from "./albums.module.css";
import DataFromBack from "./data-from-back-with-axios";

const Albums = () => {
  const [albums, setAlbums] = useState();

  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      ).then((response) => response.json());

      setAlbums(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className={css.albumContainer}>
      {albums &&
        albums.filter(el => el.userId === 3).map((album, index) => (
          <div key={index} className={css.album}>
            <p className={css.info}>Album-Id: {album.userId}</p>
            <p className={css.info}>Id: {album.id}</p>
            <p className={css.info}>Completed: {album.completed}</p>
            <div className={css.title}>Title: {album.title}</div>
          </div>
        ))}
        <DataFromBack />
    </div>
  );
};

export default Albums;
