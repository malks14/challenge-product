import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/ErrorModal/Modal";
import styles from "./DetailedProducts.module.css";

const DetailedProduct = ({ data }) => {
  const navigate = useNavigate();

  const { productId } = useParams();
  console.log(productId);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
    console.log(productId);
  };

  const cancelDeleteWarningHandler = () => {
    setShowConfirmModal(false);
  };

  const confrimDeleteWarningHandler = async () => {
    setShowConfirmModal(false);
    try {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/${productId}`, {
        method: "DELETE",
      }).then(() => {
        console.log(productId);
        navigate("/");
      });
      //   onDelete(data.id);
    } catch (error) {}
  };
  return (
    <>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <button onClick={cancelDeleteWarningHandler}>CANCEL</button>
            <button onClick={confrimDeleteWarningHandler}>DELETE</button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it cant
          be undone therafter
        </p>
      </Modal>
      <div className={styles.ctn}>
        {data?.map((el) => {
          return (
            <div key={el.id} className={styles.dtlCtn}>
              <img src={el.image} alt={el.name} />
              <div className={styles.infoCtn}>
                <p>{el.name}</p>
                <p>${el.price}</p>
                <p>{el.description}</p>
              </div>
            </div>
          );
        })}
        <div>
          <button onClick={() => navigate("/")} className={styles.btnBack}>
            Back
          </button>
          <button
            onClick={() => navigate(`/products/${productId}`)}
            className={styles.btnEdit}
          >
            Edit
          </button>
          <button
            onClick={showDeleteWarningHandler}
            className={styles.btnDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailedProduct;
