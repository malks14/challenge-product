import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import MainNavigation from "./components/Navigation/MainNavigation";
import ProductsHome from "./Pages/ProductsHome";
import "./App.css";

const NewProduct = React.lazy(() => import("./Pages/NewProduct"));
const UpdateProduct = React.lazy(() => import("./Pages/UpdateProduct"));
const DetailedPage = React.lazy(() => import("./Pages/DetailedPage"));

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div>
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<ProductsHome />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/products/:productId" element={<UpdateProduct />} />
            <Route
              path="/products/:productId/view"
              element={<DetailedPage />}
            />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
