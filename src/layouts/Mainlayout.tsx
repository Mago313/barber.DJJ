import React from "react";
import { Link, useNavigate } from "react-router-dom";

import arrow from "../assets/arrow.svg";
import logo from "../assets/djj (1).png";
import admin from "../assets/admin.png"

import styles from "../styles/pages/MainlayoutPage.module.scss";
import { useAppSelector } from "../store/store";

interface Props {
  title: string;
  subtitle?: string;
  children: any;
  isArrow?: boolean;
}

const MainLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  isArrow,
}) => {
  const navigate = useNavigate();

  const { loading, isAdmin, error } = useAppSelector(
    (state) => state.adminSlice
  );

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.headerTitle}>
          <div className={styles.headerIcons}>

            <button className={styles.goBack} onClick={() => navigate(-1)}>
              {isArrow && <img src={arrow} alt="" />}
            </button>

            <img src={logo} alt="" width={40} height={40} />
            <Link to="/admin" className={isAdmin ? styles.admin : styles.empty}>
              {isAdmin && (<img src={admin} alt="" width={30} height={30} />)}
            </Link>
          </div>
          <div className={styles.titleSubtitle}>
            <div>
              <h1>{title}</h1>
            </div>
            <p>{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;