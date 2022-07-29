import ProductsList from "components/ProductsList";
import CategoriesSmall from "components/CategoriesSmall";
import Filter from "components/Filter";
import { useLocation } from "react-router";

const ProductListPage = () => {
  
  window.scrollTo(0, 0);

  const location = useLocation();

  return (
    <div>
      {location.pathname === "/products" && <CategoriesSmall />}
      <Filter/>
      <ProductsList />
    </div>
  );
};

export default ProductListPage;
