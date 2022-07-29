import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { filterProductsByColor, filterProductsBySize, sortProducts } from "redux/data/data-actions";
import { getColorValue, getSizeValue, getSortValue } from "redux/data/data-selectors";
import s from "./Filter.module.css";

const Filter = () => {
  const colorValue = useSelector(getColorValue);
  const sizeValue = useSelector(getSizeValue);
  const sortValue = useSelector(getSortValue);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const onColorChange = (e) => {
    e.preventDefault();
    searchParams.set("color", e.target.value);
    setSearchParams(searchParams);
    dispatch(filterProductsByColor(e.target.value));
  };

  const onSizeChange = (e) => {
    e.preventDefault();
    searchParams.set("size", e.target.value);
    setSearchParams(searchParams);
    dispatch(filterProductsBySize(e.target.value));
  };

  const onSortChange = (e) => {
    e.preventDefault();
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
    dispatch(sortProducts(e.target.value));
  };

  const onResetFilter = () => {
    dispatch(filterProductsByColor("color"));
    dispatch(filterProductsBySize("size"));
    setSearchParams({ sortBy: sortValue });
  };

  return (
    <div className={s.filterContainer}>
      <div className={s.filter}>
        <span className={s.filterText}>Filter Products</span>
        <select className={s.select} value={colorValue} onChange={onColorChange}>
          <option disabled value="color">
            Color
          </option>
          <option value="black">Black</option>
          <option value="grey">Grey</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
        <select className={s.select} value={sizeValue} onChange={onSizeChange}>
          <option value="size" disabled>
            Size
          </option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button type="button" className={s.button} onClick={onResetFilter}>
          Reset filter
        </button>
      </div>
      <div className={s.filter}>
        <span className={s.filterText}>Sort Products</span>
        <select className={s.select} value={sortValue} onChange={onSortChange}>
          <option value="newest">Newest</option>
          <option value="ascending">Price ascending</option>
          <option value="descending">Price descending </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
