import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { useEffect, useState } from 'react';
import Features from "./components/features";
import Linked from "./components/linked";
import Bestseller from "./components/bestseller";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signin from "./components/signin";
import Signup from "./components/signup";
import ProductDetails from "./components/ProductDetails";
import Cartcomponent from "./components/cartcomponent";


const url = "https://ogami-api.vercel.app/api/product";

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({ products: [], totalPrice: 0 })
  useEffect(() => {
    fetchProducts();
  }, [])
  const fetchProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);

    }
    catch (error) {
      console.log(error)
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Banner />
          <Features data={products}
            cart={cart} setCart={setCart}
          // wishlist={wishlist} setwishlist={setwishlist}
          />
          <Linked />
          <Bestseller data={products} />
          <FeaturedProducts data={products} />
          <Footer />
        </div>
      )
    },
    {
      path: "/signin",
      element: <Signin />

    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/:productId",
      element: <ProductDetails />
    },
    {
      path: "/Cartcomponent",
      element: <Cartcomponent cart={cart} setCart={setCart} />
    }
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;