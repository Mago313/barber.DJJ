import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage";
import FirstPage from "./pages/FirstPage";
import CategoriesPage from "./pages/CategoriesPage"
import DatePage from "./pages/DatePage";
import AdminPage from "./pages/AdminPage"


export type State = {
  name?: string
  cards?: string[]
  price?: number
  dateTime?: string
  phone?: number
  
}

function App() {
  const [state, setState] = useState<State>({})


  return (
    <Routes>
      <Route path="/" element={<FirstPage state={state} />} />
      <Route path="/sign-in" element={<AuthorizationPage />} />
      <Route path="/categories" element={<CategoriesPage state={state} setState={setState} />} />
      <Route path="/date" element={<DatePage />} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  );
}

export default App;