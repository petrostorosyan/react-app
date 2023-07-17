import { useState } from "react";
import css from "./add-users.module.css";
import { useForm } from "react-hook-form";

const AddusersList = ({ callback, hideShow, ...props }) => {
  const [close, setClose] = useState(true);

  const closeModal = () => {
    hideShow(false);
    // setClose(false);
  };

  const {register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    let id = Math.random();
    data.id = id;
    callback(data);
  };

  return (
    <div className={css.form}>
      {close && (
        <form className={css.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={css.title}>Type your information</h1>

          <div className={css.inputInfoBox}>
            <label className={css.label}>
              Firstname
              <input
                className={css.inputBox}
                type="text"
                placeholder="Type your firstname"
                {...register("firstName", { required: true, maxLength: 15, pattern: /^[a-z][a-z\s]*$/ })}
              />
              {errors?.firstName?.type === "required" && (
                <p className={css.validationInfo}>This field is required</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className={css.validationInfo}>
                  First name cannot exceed 15 characters
                </p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className={css.validationInfo}>
                  Alphabetical characters only
                </p>
              )}
            </label>
          </div>

          <div className={css.inputInfoBox}>
            <label className={css.label}>
              Lastname
              <input
                className={css.inputBox}
                type="text"
                placeholder="Type your lastname"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 15,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p className={css.validationInfo}>This field is required</p>
              )}
              {errors?.lastName?.type === "pattern" && (
                <p className={css.validationInfo}>
                  Alphabetical characters only
                </p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className={css.validationInfo}>
                  Last name cannot exceed 15 characters
                </p>
              )}
            </label>
          </div>

          <div className={css.inputInfoBox}>
            <label className={css.label}>
              Age
              <input
                className={css.inputBox}
                type="number"
                placeholder="Type your age"
                {...register("age", { required: true, min: 18, max: 99 })}
              />
              {errors.age && (
                <p className={css.validationInfo}>
                  You Must be older then 18 and younger then 99 years old
                </p>
              )}
            </label>
          </div>
          <div className={css.buttons}>
            <input className={css.submit} type="submit" value="add" />
            <button onClick={closeModal} className={css.close} type="submit">
              Clsoe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddusersList;
