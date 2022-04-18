import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NewProduct.module.css";

const NewProduct = () => {
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

  const submitHandler = (event) => {
    event.preventDefault();
    const data = { name, description, price };
    try {
      fetch(process.env.REACT_APP_BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          <button type="submit" className={styles.btn}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
