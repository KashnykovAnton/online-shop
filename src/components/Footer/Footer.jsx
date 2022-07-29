import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Room, Phone, MailOutlined } from "@mui/icons-material";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <h1>
          <Link to="/" className={s.logo}>
            E-SHOP
          </Link>
        </h1>
        <p className={s.desc}>
          Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices
          and great deals on the largest selection of goods.
        </p>
        <div className={s.socialContainer}>
          <div className={`${s.socialIcon} ${s.facebook} `}>
            <Facebook />
          </div>
          <div className={`${s.socialIcon} ${s.instagram}`}>
            <Instagram />
          </div>
          <div className={`${s.socialIcon} ${s.twitter}`}>
            <Twitter />
          </div>
        </div>
      </div>
      <div className={s.center}>
        <h3 className={s.title}>Useful links</h3>
        <ul className={s.list}>
          <li className={s.listItem}>
            <Link to="/" className={s.link}>
              Home
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="cart" className={s.link}>
              Cart
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="products/women" className={s.link}>
              Women
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="products/men" className={s.link}>
              Men
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="products/kids" className={s.link}>
              Kids
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="/cart/wishlist" className={s.link}>
              Whishlist
            </Link>
          </li>
          <li className={s.listItem}>My Account</li>
          <li className={s.listItem}>
            <Link to="/terms" className={s.link}>
              Terms
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.right}>
        <h3 className={s.title}>Contact</h3>
        <div className={s.contactItem}>
          <Room className={s.adress} /> 040 01, Kosice, Zriedlova, 9
        </div>
        <div className={s.contactItem}>
          <Phone className={s.adress} /> 095-123-456
        </div>
        <div className={s.contactItem}>
          <MailOutlined className={s.adress} /> contact@mail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
