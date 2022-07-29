import { useRef, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { nanoid } from "nanoid";
import { toggleModalDesc } from "redux/data/data-actions";
import { getDataProducts, getToggleModalDesc } from "redux/data/data-selectors";
import { addToCart } from "redux/cart/cart-actions";
import ModalDesc from "components/ModalDesc";
import s from "./ProductPage.module.css";
import classNames from "classnames";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(getDataProducts);
  const currentProduct = products.find((product) => product.id === +id);

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(currentProduct.count);
  const [description, setDescription] = useState(currentProduct.desc);

  const [isActive, setIsActive] = useState(false);

  const showModalDesc = useSelector(getToggleModalDesc);

  const colorRef = useRef(null);
  const colorDivRef = useRef(null);

  const handleAddToCart = () => {
    if (count === 0) {
      return alert("You need to increase the amount of the product!");
    }
    if (color === "") {
      return alert("You need to choose the color of the product!");
    }
    if (size === "") {
      return alert("You need to choose the size of the product!");
    }
    dispatch(addToCart({ ...currentProduct, id: nanoid(), color, size, count }));
    alert("Your product was added to the cart!");
  };

  const onChangeColor = (e) => {
    e.preventDefault();
    let element = e.currentTarget.childNodes;
    let activeClass = `${s.filterColorActive}`;
    element.forEach((el) => el.classList.remove(activeClass));
    if (e.target.nodeName === "BUTTON") {
      e.target.classList.add(activeClass);
    }
    setColor(e.target.value);
  };

  const onSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count > 0 ? count - 1 : 0);

  const onToggleModalDesc = () => {
    dispatch(toggleModalDesc(!showModalDesc));
  };

  const onChangeDescription = (text) => {
    setDescription(text);
  };

  const colorClass = classNames(s.filterColor, { [s.filterColorActive]: isActive });

  // const onClickButton = (index, e) => {
  //   e.preventDefault();
  //   removeActiveColorClass(index);
  //   addActiveColorClass(e.target);
  //   console.log(e.target.className);
  // };

  // const removeActiveColorClass = (index) => {
  //   const currentActiveColor = document.querySelector(`#button-${index}`);

  //   if (currentActiveColor) {
  //     currentActiveColor.classList.remove(s.filterColorActive);
  //   }
  // };

  // function addActiveColorClass(el) {
  //   el.classList.add(s.filterColorActive);
  // }

  return (
    <div className={s.container}>
      {showModalDesc && <ModalDesc onClose={onToggleModalDesc} desc={description} onChange={onChangeDescription} />}
      {currentProduct && (
        <div className={s.wrapper}>
          <div className={s.imgContainer}>
            <img className={s.image} src={currentProduct.img} alt="product" />
          </div>
          <div className={s.infoContainer}>
            <h1 className={s.title}>{currentProduct.title}</h1>
            <p className={s.desc}>{description}</p>
            <div className={s.priceContainer}>
              <span className={s.price}>{currentProduct.price} $</span>
              <button className={s.button} type="button" onClick={onToggleModalDesc}>
                Change description
              </button>
            </div>
            <div className={s.filterContainer}>
              <div
                className={s.filter}
                ref={colorDivRef}
                onClick={onChangeColor}
              >
                <span className={s.filterTitle}>Color</span>
                {currentProduct.color.map((color, index) => (
                  <button
                    // id={`button-${index}`}
                    key={nanoid()}
                    className={s.filterColor}
                    // className={colorClass}
                    value={color}
                    ref={colorRef}
                    style={{ backgroundColor: `${color}` }}
                    // onClick={(e) => onClickButton(index, e)}
                  />
                ))}
              </div>
              <div className={s.filter}>
                <span className={s.filterTitle}>Size</span>
                <select className={s.filterSize} onChange={onSizeChange} value={size}>
                  <option default>Choose your size</option>
                  {currentProduct.size.map((size) => (
                    <option key={nanoid()} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={s.addContainer}>
              <div className={s.amountContainer}>
                <Remove onClick={onDecrement} style={{ cursor: "pointer" }} />
                <span className={s.amount}>{count}</span>
                <Add onClick={onIncrement} style={{ cursor: "pointer" }} />
              </div>
              <button className={s.button} onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
