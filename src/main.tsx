import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import LayoutRouter from "@/layouts/_router";

import '@/styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={LayoutRouter} />
  </React.StrictMode>,
)
