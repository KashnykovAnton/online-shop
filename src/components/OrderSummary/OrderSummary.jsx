// import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToggleModal, getCartProducts } from "redux/cart/cart-selectors";
import { toggleModal } from "redux/cart/cart-actions";
import Modal from "components/Modal";
import s from "./OrderSummary.module.css";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(getToggleModal);
  const productsWithTypes = useSelector(getCartProducts);

  const shippingCount = (arr) => (2.99 * arr.length).toFixed(2);

  const cartTotal = (arr) => {
    let total = 0;
    arr.map(({ price, count }) => (total += price * count));
    return total.toFixed(2);
  };

  // const onToggleModal = useCallback(() => {
  //   dispatch(toggleModal(true));
  // }, [dispatch]);

  //   const addClassToBody = (el) => {
  //     el.classList.toggle("is-hidden");
  //   };

  const onToggleModal = () => {
    dispatch(toggleModal(!showModal));
    const elStyle = document.querySelector("body").style;
    elStyle.overflow === "hidden" ? (elStyle.overflow = "scroll") : (elStyle.overflow = "hidden");
  };

  return (
    <div className={s.summary}>
      {showModal && <Modal onClose={onToggleModal} cartTotal={cartTotal} />}
      <h1 className={s.summaryTitle}>ORDER SUMMARY</h1>
      <div className={s.summaryItem}>
        <span>Subtotal</span>
        <span>{cartTotal(productsWithTypes)} $</span>
      </div>
      <div className={s.summaryItem}>
        <span>Estimated shipping</span>
        <span>{shippingCount(productsWithTypes)} $</span>
      </div>
      <div className={s.summaryItem}>
        <span>Shipping discount</span>
        <span>{shippingCount(productsWithTypes) * -1} $</span>
      </div>
      <div className={s.summaryItemTotal} type="total">
        <span>Total</span>
        <span>{cartTotal(productsWithTypes)} $</span>
      </div>
      <button className={s.button} onClick={onToggleModal}>
        CHECKOUT NOW
      </button>
    </div>
  );
};

export default OrderSummary;
