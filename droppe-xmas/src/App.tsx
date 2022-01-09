import { useState } from "react";

import { useQuery } from "react-query";

import "./App.css";
import { DataState } from "./main/enum/DataState.enum";
import { Product } from "./main/interface/product.interface";
import { getLists } from "./main/service/droppe.service";

const App = () => {
  const { data, isLoading, error } = useQuery<Product[]>("products", getLists);
  console.log(data);

  const getTotalLists = () => null;
  const handleAddToCart = (selectedItem: Product) => null;
  const handledRemoveFromCart = () => null;

  if (isLoading) return <div>{DataState.LOADING}</div>;
  if (error) return <div>{DataState.ERROR}</div> ;

  return <div className="App"></div>;
};

export default App;
