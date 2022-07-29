import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCountOfCartProducts } from "redux/cart/cart-selectors";
import SearchInput from "../SearchInput";
import s from "./Navbar.module.css";

const Navbar = () => {
  const value = useSelector(getCountOfCartProducts);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <span className={s.language}>EN</span>
          <SearchInput />
        </div>
        <div className={s.center}>
          <Link to="/" className={s.link}>
            E-SHOP
          </Link>
        </div>
        <div className={s.right}>
          <div className={s.menuItem}>
            <Link to="register" className={s.menuLink}>
              REGISTER
            </Link>
          </div>
          <div className={s.menuItem}>
            <Link to="login" className={s.menuLink}>
              LOGIN IN
            </Link>
          </div>
          <div className={s.menuItem}>
            <Link to="cart" className={s.menuLink}>
              <Badge badgeContent={value === 0 ? 0 : value} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
