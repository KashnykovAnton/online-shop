import { FavoriteBorderOutlined, FavoriteOutlined, ShoppingCartOutlined, InfoOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addToCart } from "redux/cart/cart-actions";
// import { addProduct } from "redux/product/product-actions";
import s from "./ProductItem.module.css";
import { changeDataProducts } from "redux/data/data-actions";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const basicParametres = { id: nanoid(), count: 1, color: item.color[0], size: item.size[0] };

  const onAddToCart = () => dispatch(addToCart({ ...item, ...basicParametres }));

  const onAddToFavorite = () =>
    !item.favorite
      ? dispatch(changeDataProducts({ ...item, favorite: true }))
      : dispatch(changeDataProducts({ ...item, favorite: false }));

  // const onAddProduct = () => dispatch(addProduct(item));

  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img className={s.image} src={item.img} alt="product" />
        <div className={s.price}>
          <span>{item.price} $</span>
        </div>
        <div className={s.titleContainer}>
          <span className={s.title}>{item.title}</span>
        </div>
      </div>
      <div className={s.infoContainer}>
        <div className={s.icon} onClick={onAddToCart}>
          <ShoppingCartOutlined />
        </div>
        <div className={s.icon} onClick={onAddToFavorite}>
          {item.favorite ? <FavoriteOutlined sx={{ color: "red" }} /> : <FavoriteBorderOutlined />}
        </div>
        <div
          className={s.icon}
          // onClick={onAddProduct}
        >
          <Link to={`product/${item.id}`} className={s.link}>
            <InfoOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
