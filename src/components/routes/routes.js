import { Route, Routes } from "react-router-dom";
import Header from "../header/header";
import Product from "../products/products";
import ProductTablets from "../products/tablets/tablets";
import ProductPhones from "../products/phones/phones";
import UserList from "../users/users";
import Albums from "../data-from-server/albums";
import Clippings from "../clippings/clippings";
import Parent from "../parent/parent";
import Child from "../parent/child/child";
import LadingMain from "../landing/landing";
import Clothes from "../products/clothes/clothes";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="about" element={<h2>about</h2>} />
      <Route path="users" element={<UserList />} />
      <Route path="albums" element={<Albums />} />
      <Route path="clippings" element={<Clippings />} />

      <Route path="parent" element={<Parent />} />       
      <Route path="parent/child" element={<Child />} />
      <Route path="landing" element={<LadingMain />} />

      <Route
        path="/products"
        element={<Product />}
        // children={
        //   ((<Route path="tablets" element={<ProductTablets />} />),
        //   (<Route path="phones" element={<ProductPhones />} />))
        // }
      >
        <Route path="tablets" element={<ProductTablets />} />
        <Route path="phones" element={<ProductPhones />} />
        <Route path="clothes" element={<Clothes />} />
      </Route>
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
};

export default RouterConfig;
