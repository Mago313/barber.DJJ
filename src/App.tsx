import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage";
import FirstPage from "./pages/FirstPage";
import CategoriesPage from "./pages/CategoriesPage"
import DatePage from "./pages/DatePage";
import AdminPage from "./pages/AdminPage"
import { State } from "./types/state";
import LoaderPage from "./pages/LoaderPage";

function App() {
  const [state, setState] = React.useState<State>({ name: '', cards: [], dateTime: '', time: '', phone: '+7 ', price: 0 })
  const [modalActive, setModalActive] = React.useState(false)
  const [test, setTest] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setTest(false)
    },5000)
  },[])

  if(test) return <LoaderPage />


  return (
    <Routes>
      <Route path="/" element={<FirstPage state={state} setState={setState} modalActive={modalActive} setModalActive={setModalActive} />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/categories" element={<CategoriesPage state={state} setState={setState} modalActive={modalActive} setModalActive={setModalActive} />} />
      <Route path="/date" element={<DatePage state={state} setState={setState} modalActive={modalActive} setModalActive={setModalActive} />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;