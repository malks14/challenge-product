import React, { useState } from "react";
import { useNavigate } from "react-router";

import Modal from "../UI/ErrorModal/Modal";
import styles from "./ProductItem.module.css";

const ProductsItem = ({data, onDelete}) => {
  const navigate = useNavigate();



  return (
    <>
      <div>
        {data.map((el) => {
          return (
            <>
              <div key={el.id} className={styles.productItemCtn} onClick={() => navigate(`/products/${el.id}/view`)}>
                <div className={styles.productImg}>
                  <img src={el.image} alt={el.name} />
                </div>
                <p>{el.name}</p>
                <p>${el.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductsItem;
