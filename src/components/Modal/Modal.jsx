import { createPortal } from "react-dom";
import { useEffect } from "react";
import { HighlightOffOutlined } from "@mui/icons-material";
import s from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/cart-selectors";
import { delFromCart } from "../../redux/cart/cart-actions";
// import OrderSummary from "../OrderSummary";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ onClose, cartTotal }) => {
  const dispatch = useDispatch();

  const productsWithTypes = useSelector(getCartProducts);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const summaryPerProduct = (price, count) => price * count;

  const onBuyProducts = () => {
    onClose();
    productsWithTypes.map((item) => dispatch(delFromCart(item.id)));
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button className={s.closeButton} type="button" onClick={() => onClose()} aria-label="Close modal">
          <HighlightOffOutlined fontSize="large" />
        </button>
        <h1 className={s.summaryTitle}>YOUR FINAL ORDER SUMMARY</h1>
        <div className={s.mainContainer}>
          {!productsWithTypes.length ? (
            <h1>You don't have any product in your cart!</h1>
          ) : (
            <>
              <div className={s.cartContainer}>
                <div className={s.leftSide}>
                  <ul className={s.list}>
                    {productsWithTypes.map((product) => (
                      <li className={s.item} key={product.id}>
                        <div>
                          <h3>Title: {product.title}</h3>
                          <p className={s.listItem}>Price: {product.price} $</p>
                          <p className={s.listItem}>Quantity: {product.count}</p>
                          <p className={s.listItem}>Summary: {summaryPerProduct(product.price, product.count)} $</p>
                        </div>
                        <div className={s.containerImg}>
                          <img className={s.img} src={product.img} alt="product" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.rightSide}>
                  <div className={s.summaryItem}>
                    <span>Subtotal</span>
                    <span>{cartTotal(productsWithTypes)} $</span>
                  </div>
                  <div className={s.summaryItem}>
                    <span>Estimated shipping</span>
                    <span>{(5.9 * productsWithTypes.length).toFixed(2)} $</span>
                  </div>
                  <div className={s.summaryItem}>
                    <span>Shipping discount</span>
                    <span>{(-5.9 * productsWithTypes.length).toFixed(2)} $</span>
                  </div>
                  <div className={s.summaryItemTotal} type="total">
                    <span>Total</span>
                    <span>{cartTotal(productsWithTypes)} $</span>
                  </div>
                </div>
              </div>
              <button className={s.button} type="button" onClick={onBuyProducts}>
                Buy all products!
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
