import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";

const CategoryItem = ({ item}) => {
  return (
    <div className={s.container}>
      <img src={item.img} alt="category" className={s.image} />
      <div className={s.info}>
        <h1 className={s.title}>{item.title}</h1>
        <Link to={`products/${item.title.toLowerCase()}`} className={s.link}>
          <button className={s.button}>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
