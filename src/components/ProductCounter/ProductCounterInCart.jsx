import { useDispatch } from "react-redux";
import { changeInCart } from "redux/cart/cart-actions";
import { Add, Remove } from "@mui/icons-material";
import s from "./ProductCounterInCart.module.css";

const ProductCounterInCart = ({ product }) => {

  const dispatch = useDispatch();

  const onIncrement = () => dispatch(changeInCart({ ...product, count: product.count + 1 }));
  const onDecrement = () => dispatch(changeInCart({ ...product, count: product.count > 0 ? product.count - 1 : 0 }));

  return (
    <div className={s.container}>
      <Remove onClick={onDecrement} className={s.icon} />
      <span className={s.amount}>{product.count}</span>
      <Add onClick={onIncrement} className={s.icon} />
    </div>
  );
};

export default ProductCounterInCart;
