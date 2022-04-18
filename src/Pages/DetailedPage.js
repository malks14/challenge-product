import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DetailedProduct from "../components/Products/DetailedProduct";

const DetailedPage = () => {
  const [products, setProducts] = useState();

  const {productId} = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/${productId}/view`
        );

        const responseData = await fetchedProducts.json();
        const loadedProduct = [];

        for (const key in responseData) {
            loadedProduct.push({
                name: responseData[key].name,
                price: responseData[key].price,
                image: responseData[key].image,
                description: responseData[key].description
            })
        }

        if (!fetchedProducts.ok) {
          throw new Error(responseData.message);
        }

          setProducts(loadedProduct);
      } catch (err) {}
    };
    fetchProducts();
  }, []);
  return <DetailedProduct data={products} />
};

export default DetailedPage;
