import React from "react";
import { Route, Routes } from 'react-router-dom';
import TodoApp from "./components/TodoApp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
