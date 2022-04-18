import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./NewProduct.module.css";

const UpdateProduct = () => {
  const productId = useParams().productId;
  const [loadedPlace, setLoadedPlace] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responseData = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/${productId}`
        );
        const data = await responseData.json();
        setLoadedPlace(data.product);
      } catch (error) {}
    };
    fetchProduct();
  }, [productId]);

  const submitHandler =  (event) => {
      event.preventDefault();
      const productData = { name, description, price };
      try {
         fetch(`${process.env.REACT_APP_BACKEND_URL}/${productId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        }).then(() => {
          navigate("/");
        });
        
      } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCtn}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            name="name"
            type="text"
            
            value={name}
            onChange={nameHandler}
          />
          <label htmlFor="price">Product Price</label>
          <input
            id="price"
            name="price"
            type="text"
            
            value={price}
            onChange={priceHandler}
          />
          <label htmlFor="description">Product Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={descriptionHandler}
          />
          <button type="submit" className={styles.btn}>Edit</button>
        </form>
      </div>
      
    </div>
  );
};

export default UpdateProduct;
