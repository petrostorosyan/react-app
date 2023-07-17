import { useState } from "react";
import AddusersList from "./add-users/add-users";
import css from "./users.module.css";

const UserList = () => {
  const [isShow, setIsShow] = useState(false);
  const [uesrsArray, setUserArray] = useState([]);

  const addItem = () => {
    setIsShow(!isShow);
  };

  const getData = (payload) => {
    setUserArray((oldArray) => [payload, ...oldArray]);
  };

  const deleteItem = (id) => {
    let fil = uesrsArray.filter((el) => el.id !== id);
    setUserArray(fil);
  };

  const getShow = () => {
    setIsShow(false)
  };

  console.log(uesrsArray);

  return (
    <div className={css.userContainer}>
      <h1>Users List</h1>
      <button className={css.addUser} onClick={addItem}>
        Add User
      </button>
      {isShow && (
        <AddusersList callback={getData} hideShow={getShow} property={isShow} />
      )}

      <div className={css.usersInfo}>
        {uesrsArray.map((x, index) => {
          return (
            <div key={index} className={css.usersInfoBox}>
              <p className={css.userData}>First Name: {x.firstName}</p>
              <p>Last Name: {x.lastName}</p>
              <p>Age: {x.age}</p>
              <button className={css.delete} onClick={() => deleteItem(x.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
