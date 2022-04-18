import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainHeader from "./MainHeader";

import styles from "./MainNavigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <div className={styles.navDrawer}>
          <button className={styles.contactBtn} onClick={() => navigate('/newproduct')}>ADD PRODUCT</button>
        </div>
      </SideDrawer>
      <MainHeader>
        <h1 className={styles.navTitle}>
          <Link to="/">Products</Link>
        </h1>

        <button className={styles.contactBtn} onClick={() => navigate('/newproduct')}>ADD PRODUCT</button>
        <button className={styles.hambBtn} onClick={openDrawerHandler}>
          <MenuIcon />
        </button>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;

