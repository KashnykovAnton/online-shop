import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItem from "components/ProductItem";
import { getDataProducts } from "redux/data/data-selectors";
import s from "./WishListPage.module.css";

const WishListPage = () => {
  const products = useSelector(getDataProducts);
  const favoriteProducts = products.filter((item) => item.favorite);

  return (
    <div className={s.container}>
      <Link to="/cart" className={s.link}>
        <button className={s.button}>GO TO CART</button>
      </Link>
      {favoriteProducts.length === 0 && <h1 className={s.title}>You don't have favorite products</h1>}
      <div className={s.wrapper}>
        {favoriteProducts.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WishListPage;
