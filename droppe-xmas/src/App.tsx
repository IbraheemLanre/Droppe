import React, { useState } from "react";

import { useQuery } from "react-query";
import List from "./main/product/list";
import "./App.css";
import { DataState } from "./main/enum/DataState.enum";
import { Product } from "./main/interface/product.interface";
import { getLists } from "./main/service/droppe.service";
import Cart from "./main/cart/cart";

const App = () => {

  const [productList, setProductlist] = useState([] as Product[])
  const { data, isLoading, error } = useQuery<Product[]>("products", getLists);
  console.log(data);

  const handleAddToCart = (selectedProduct: Product[]) => {
    setProductlist(selectedProduct);
  };


  if (isLoading) return <div>{DataState.LOADING}</div>;
  if (error) return <div>{DataState.ERROR}</div>;

  return (
    <>
      <div className="slider"></div>
      
      {/* Displays  all products to the page*/}
      <div className="all-carts">
        {data?.map((product) => (
          <div key={product.id}>
            <List productList={product} handleAddToCart={handleAddToCart}/>
          </div>
        ))}
      </div>

      {/* Shows the items added to the Cart */}
      <Cart
        cartItems={productList}
        addToCart={handleAddToCart}
      />
      
    </>
  );
};

export default App;

