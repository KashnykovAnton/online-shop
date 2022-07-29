import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { getDataSliderItems } from "redux/data/data-selectors";
import s from "./Slider.module.css";

const Slider = () => {
  const sliderItems = useSelector(getDataSliderItems)

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const wrapperClass = `wrapper-${slideIndex}`;

  return (
    <div className={s.container}>
      <div className={s.arrowLeft} onClick={() => handleClick("left")}>
        <ArrowRightOutlined />
      </div>
      <div className={s[wrapperClass]}>
        {sliderItems.map((item) => {
          return (
            <div className={s.slide} key={item.id} style={{ backgroundColor: `${item.bg}` }}>
              <div className={s.imgContainer}>
                <img className={s.image} src={item.img} alt="slide" />
              </div>
              <div className={s.infoContainer}>
                <h1 className={s.title}>{item.title}</h1>
                <p className={s.desc}>{item.desc}</p>
                <button className={s.button}>
                  <Link to="products" className={s.link}>
                    SHOP NOW
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.arrowRight} onClick={() => handleClick("right")}>
        <ArrowLeftOutlined />
      </div>
    </div>
  );
};

export default Slider;
