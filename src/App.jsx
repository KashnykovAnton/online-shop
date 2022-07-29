import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { addDataProducts, addDataCategories, addDataSliderItems } from "./redux/data/data-actions";
import { products, categories, sliderItems } from "./data";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WishListPage from "./pages/WishListPage";
import TermsPage from "./pages/TermsPage/TermsPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDataProducts(products));
    dispatch(addDataCategories(categories));
    dispatch(addDataSliderItems(sliderItems));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/:category" element={<ProductListPage />} />
        <Route path="products/:category/product/:id" element={<ProductPage />} />
        <Route path="products/product/:id" element={<ProductPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="cart/wishlist" element={<WishListPage />} />
        <Route path="cart/wishlist/product/:id" element={<ProductPage />} />
        <Route path="terms" element={<TermsPage />} />
        {/* <Route path="?search=boots" element={<ProductListPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
