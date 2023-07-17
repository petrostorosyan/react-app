import css from "./clothes.module.css";
import data from "../../../services/clothes/clothes.service.js";
import { useEffect, useState } from "react";

const Clothes = () => {
  const [clothesValue, setClothesValue] = useState();

  const [gender, setGender] = useState();
  const [genderValue, setGenderValue] = useState();

  const [model, setModel] = useState();
  const [modelValue, setModelValue] = useState();

  const [size, setSize] = useState();
  const [sizeValue, setSizeValue] = useState();

  const [color, setColor] = useState();
  const [colorValue, setColorValue] = useState();

  const [obj, setObj] = useState({});

  const [genderDisable, setGenderDisable] = useState(true);
  const [modelDisable, setModelDisable] = useState(true);
  const [sizeDisable, setSizeDisable] = useState(true);
  const [colorDisable, setColorDisable] = useState(true);  

  const clothesInfo = [
    {id: 1, title: 'Gender:', property: obj.gender},
    {id: 2, title: 'Model Group:', property: obj.modelGroup },
    {id: 3, title: 'Model:', property: obj.model },
    {id: 4, title: 'Size:', property: obj.size },
    {id: 5, title: 'Color:', property: obj.color }
  ];

  const selectClothes = (e) => {
    setClothesValue(e.target.value);
    let a = data.items.find((el) => el.name === e.target.value);
    setGender(a);
    setGenderDisable(false);
    obj.gender = e.target.value;

    if (e.target.value === "default") {
      setGender('');
      setModel('');
      setSize('');
      setColor('');
      setObj({})
    }
  };

  const selectGender = (e) => {
    setGenderValue(e.target.value);
    let b = gender.items.find((el) => el.name === e.target.value);
    setModel(b);
    setModelDisable(false);
    obj.modelGroup = e.target.value;

    if (e.target.value === "default") {
      setModel('');
      setSize('');
      setColor('');
      setObj({gender: obj.gender})
    }
  };

  const selectModel = (e) => {
    setModelValue(e.target.value);
    let c = model.items.find((el) => el.name === e.target.value);
    setSize(c);
    setSizeDisable(false);
    obj.model = e.target.value;

    if (e.target.value === "default") {
      setSize('');
      setColor('');
      setObj({gender: obj.gender, modelGroup: obj.modelGroup})
    }
  };

  const selectSizes = (e) => {
    setSizeValue(e.target.value);
    let d = size.items.find((el) => el.name === e.target.value);
    setColor(d);
    setColorDisable(false);
    obj.size = e.target.value;

    if (e.target.value === "default") {
      setColor('');
      setObj({gender: obj.gender, modelGroup: obj.modelGroup, model: obj.model})
    }
  };

  const selectColor = (e) => {
    setColorValue(e.target.value);
    obj.color = e.target.value;   
    if (e.target.value === "default") {
      setObj({gender: obj.gender, modelGroup: obj.modelGroup, model: obj.model, size: obj.size})
    }
  };

  useEffect(() => {
    setClothesValue(clothesValue);
  }, [clothesValue]);
  

  return (
    <div className={css.clothesContainer}>
      <div className={css.clothesContent}>
        <div data-aos="fade-right" className={css.selectBox}>
          <p className={css.text}>Filter by Gender</p>
          <select
            value={clothesValue}
            defaultValue={"default"}
            className={css.select}
            onChange={selectClothes}
          >
            <option value={"default"}>Select Clothes</option>
            {data.items.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        </div>

        {gender && (
          <div data-aos="fade-left" className={css.selectBox}>
            <p className={css.text}>Filter by Model Group</p>
            <select
              disabled={genderDisable}
              defaultValue={"default"}
              value={genderValue}
              className={css.select}
              onChange={selectGender}
            >
              <option value={"default"}>Select Model Group</option>
              {gender?.items?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {model && (
          <div data-aos="fade-right" className={css.selectBox}>
            <p className={css.text}>Filter by Model</p>
            <select
              disabled={modelDisable}
              defaultValue={"default"}
              value={modelValue}
              className={css.select}
              onChange={selectModel}
            >
              <option value={"default"}>Select model</option>
              {model?.items?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {size && (
          <div data-aos="fade-left" className={css.selectBox}>
            <p className={css.text}>Filter by Sizes</p>
            <select
              disabled={sizeDisable}
              defaultValue={"default"}
              value={sizeValue}
              className={css.select}
              onChange={selectSizes}
            >
              <option value={"default"}>Select Sizes</option>
              {size?.items?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {color && (
          <div data-aos="fade-right" className={css.selectBox}>
            <p className={css.text}>Filter by Color</p>
            <select
              disabled={colorDisable}
              defaultValue={"default"}
              value={colorValue}
              className={css.select}
              onChange={selectColor}
            >
              <option value={"default"}>Select Colores</option>
              {color?.items?.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className={css.showData}>
        <h2 className={css.clothesTitle}>Clothes info</h2>
        {clothesInfo.map((el) => (
          <div key={el.id} className={css.productInfo}>
          <p className={css.textName}>{el.title}</p>
          <p className={css.textProps}>{el.property}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
