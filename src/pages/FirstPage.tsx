import React, { ReactChild, useState } from "react";
import "../App.css";
import MainLayout from "../layouts/Mainlayout";
import CategoriesCard from "../components/CategoriesCard";
import date from "../assets/date.svg";
import services from "../assets/checkMark.png";
import Modal from "../modal/Modal";
import { State } from "../App";
import { Button } from "../components/Button";
import AdminPage from "./AdminPage";


const Spacing = ({ children }: { children: ReactChild }) => {
  return (
    <div
      style={{
        paddingTop: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      {children}
    </div>
  );
};
const FirstPage = ({ state }: { state: State }) => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <MainLayout title="DJJ" subtitle="Уход за мужским имеджем">
      <div style={{ paddingTop: 8 }}>
        <Spacing>
          <CategoriesCard img={date} name="Время" link="/date" />
        </Spacing>
        <Spacing>
          <CategoriesCard img={services} name="Услуги" link='/categories' />
        </Spacing>
        {modalActive || <Spacing>
          {state.price ? <div style={{ flex: 1 }}><Button onClick={() => { setModalActive(!modalActive) }} title="Записаться" /></div> : <></>}
        </Spacing>}
        {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
      </div>
    </MainLayout>
  );
};

export default FirstPage;
