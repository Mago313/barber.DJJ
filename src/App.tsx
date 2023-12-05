import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage";
import FirstPage from "./pages/FirstPage";
import CategoriesPage from "./pages/CategoriesPage"
import DatePage from "./pages/DatePage";
import AdminPage from "./pages/AdminPage"
import { State } from "./types/state";

function App() {
  const [state, setState] = React.useState<State>({name: '', cards: [], dateTime: '', phone: '+7 ', price: 0})


  return (
    <Routes>
      <Route path="/" element={<FirstPage state={state} setState={setState} />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/categories" element={<CategoriesPage state={state} setState={setState} />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  );
}

export default App;