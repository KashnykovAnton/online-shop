import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={s.container}>
      <img
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=996&t=st=1658219471~exp=1658220071~hmac=dd7d1dba4c9df653eea43c5689fb7230c3e4d125fcaee097ef77a291daa5cf26"
        alt=""
      />
      <Link to="/" className={s.link}>
        <button className={s.button}>GO HOME</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
