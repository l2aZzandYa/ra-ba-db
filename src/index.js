import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'rc-switch/assets/index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Homepage from './features/students/pages/Homepage';
import Student from './features/students/pages/Student';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/student",
    element: <Student />,
  },
], { basename: process.env.PUBLIC_URL });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
