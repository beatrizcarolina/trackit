import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/historico" element={<HistoricPage />} />
      </Routes>
    </BrowserRouter>
  )
}