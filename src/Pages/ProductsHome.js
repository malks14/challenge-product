import React, { useEffect, useState } from "react";


import ErrorModal from "../components/UI/ErrorModal/ErrorModal";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner"
import ProductsList from "../components/Products/ProductsList";

const ProductsHome = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const fetchedProducts = await fetch(process.env.REACT_APP_BACKEND_URL);

        const responseData = await fetchedProducts.json();

        if (!fetchedProducts.ok) {
          throw new Error(responseData.message);
        }
        
        setProducts(responseData.product);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  const placeDeletedHandler = (deletedPlaceId) => {
    setProducts((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && products && <ProductsList data={products} onDeletePlace={placeDeletedHandler} />}
    </>
  );
};

export default ProductsHome;
