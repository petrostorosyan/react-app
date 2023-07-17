import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const data = [
  { id: 1, path: "/", title: "Home" },
  { id: 2, path: "/products", title: "Products" },
  { id: 3, path: "/users", title: "Users List" },
  { id: 4, path: "/albums", title: "Albums" },
  { id: 5, path: "/clippings", title: "Clippings" },
  { id: 6, path: "/parent", title: "Parent" },
  { id: 7, path: "/landing", title: "Landing" },
  { id: 8, path: "/about", title: "About" },
];

const Nav = () => {

  const activeLink = ({isActive}) => {
    return {
      opacity: isActive ? '1': '0.7',
      fontSize: isActive ? '22px': '20px',
      transition: isActive ? '0.2s': '1s'
    }    
  }
  
  const renderListNavigation = () => {
    return data.map((x) => (
      <li key={x.id} className={css.listItem}>
        <NavLink style={activeLink} to={x.path} className={css.link}>
          {x.title}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className={css.navContainer}>
      <ul className={css.list}>{renderListNavigation(data)}</ul>
    </div>
  );
};

export default Nav;
