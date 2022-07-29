import ProductItem from "../ProductItem";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredItems } from "redux/data/data-selectors";
import { useEffect } from "react";
import {
  filterByCategories,

} from "redux/data/data-actions";
import s from "./ProductsList.module.css";

const ProductsList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const filteredProducts = useSelector(getFilteredItems);

  useEffect(() => {
    if (!category) {
      dispatch(filterByCategories(""));
      return;
    }
    dispatch(filterByCategories(category));
    // dispatch(sortProducts("newest"));
  }, [category, dispatch]);



  return (
    <div className={s.container}>
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
