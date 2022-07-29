import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";
import { getCartProducts } from "redux/cart/cart-selectors";
import { delFromCart } from "redux/cart/cart-actions";
import ProductCounterInCart from "components/ProductCounter";
import OrderSummary from "components/OrderSummary";
import s from "./CartPage.module.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => navigate("/products");

  const productsWithTypes = useSelector(getCartProducts);

  const productTotal = (price, count) => {
    return price * count;
  };

  const onDeleteProduct = (id) => {
    dispatch(delFromCart(id));
  };

  return (
    <div>
      <div className={s.wrapper}>
        <h1 className={s.title}>YOUR BAG</h1>
        <div className={s.top}>
          <button className={s.topButton} onClick={goBack}>
            Continue shopping
          </button>
          <Link to="wishlist" className={s.link}>
            <button className={s.topButton}>Your wishlist</button>
          </Link>
        </div>
        <div className={s.bottom}>
          <div className={s.info}>
            {productsWithTypes &&
              productsWithTypes.map((product) => (
                <div key={nanoid()}>
                  <div className={s.product}>
                    <div className={s.productDetail}>
                      <img className={s.image} src={product.img} alt="product" />
                      <div className={s.details}>
                        <span>
                          <b>Product: </b> {product.title}
                        </span>
                        <span>
                          <b>Description: </b> {product.desc}
                        </span>
                        <div className={s.productColor} style={{ backgroundColor: `${product.color}` }} />
                        <span>
                          <b>Product Size: </b> {product.size}
                        </span>
                      </div>
                    </div>
                    <span className={s.priceDetails}>
                      <ProductCounterInCart product={product} />
                      <span className={s.productPrice}>{product.price} $</span>
                      <span className={s.productTotal}>{productTotal(product.price, product.count)} $</span>
                      <button type="button" className={s.delButton} onClick={() => onDeleteProduct(product.id)}>
                        Delete from cart
                      </button>
                    </span>
                  </div>
                  <hr
                    style={{ height: "1px", border: "none", backgroundColor: "grey", margin: "10px 0px", width: "95%" }}
                  />
                </div>
              ))}
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
