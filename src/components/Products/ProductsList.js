import React from "react";

import ProductsItem from "./ProductsItem";
import styles from "./ProductsList.module.css";

const ProductsList = ({data, onDeletePlace}) => {

  return (
      <div className={styles.productsCtn}>
        <ProductsItem data={data} onDelete={onDeletePlace}/>
      </div>
  );
};

export default ProductsList;
