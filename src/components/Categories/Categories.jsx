import { useSelector } from "react-redux";
// import { categories } from "../../data";
import { getDataCategories } from "redux/data/data-selectors";
import CategoryItem from "../CategoryItem";
import s from "./Categories.module.css";

const Categories = () => {
  const categories = useSelector(getDataCategories);
  return (
    <div className={s.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
