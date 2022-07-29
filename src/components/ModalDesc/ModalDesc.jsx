import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { HighlightOffOutlined } from "@mui/icons-material";
import s from "./ModalDesc.module.css";

const modalRoot = document.querySelector("#modal-root");

const ModalDesc = ({ onClose, desc, onChange }) => {
  const textArea = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.body.classList.add(`${s.blockScroll}`);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove(`${s.blockScroll}`);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onChangeDescription = () => {
    onChange(textArea.current.value);
    onClose();
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>
        <button className={s.closeButton} type="button" onClick={() => onClose()} aria-label="Close modal">
          <HighlightOffOutlined fontSize="large" />
        </button>
        <h1 className={s.summaryTitle}>Please, change the description</h1>
        <div className={s.mainContainer}>
          <textarea ref={textArea} className={s.textarea} defaultValue={desc} />
          <input className={s.button} type="submit" value="Change it" onClick={onChangeDescription} />
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalDesc;
