import Categories from "components/Categories";
import Slider from "components/Slider";
import { getSearchProducts } from "redux/data/data-selectors";
import { useSelector } from "react-redux";

const HomePage = () => {
  window.scrollTo(0, 0);

  const searchProducts = useSelector(getSearchProducts);

  console.log(searchProducts);

  return (
    <div>
      {/* {!searchProducts.length && (
        <> */}
          <Slider />
          <Categories />
        {/* </>
      )} */}
      {/* {searchProducts.length && <Categories searchProducts={searchProducts} />} */}
    </div>
  );
};

export default HomePage;
