import { Send } from "@mui/icons-material";
import s from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Newsletter</h1>
      <div className={s.description}>Get our last updates on your email!</div>
      <div className={s.inputContainer}>
        <input className={s.input} placeholder="Your email" />
        <button className={s.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
