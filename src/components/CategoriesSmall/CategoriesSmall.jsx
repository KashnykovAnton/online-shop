import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getDataCategories } from "redux/data/data-selectors";
import s from "./CategoriesSmall.module.css";

const CategoriesSmall = () => {
  const categories = useSelector(getDataCategories);
  const location = useLocation();

  return (
    <div>
      <h2 className={s.categoryTitle}>Choose your category!</h2>
      <div className={s.container}>
        {categories.map((item) => (
          <div className={s.containerInside} key={item.id}>
            <img src={item.imgSmall} alt="men ties" className={s.image} />
            <div className={s.info}>
              <h1 className={s.title}>{item.title}</h1>
              <Link to={`${location.pathname}/${item.title.toLowerCase()}`} className={s.link}>
                <button className={s.button}>SHOP NOW</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSmall;
