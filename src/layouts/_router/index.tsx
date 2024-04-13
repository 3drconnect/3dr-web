import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Login from '@/layouts/Auth/Login';
import PasswordRecovery from '@/layouts/Auth/PasswordRecovery';
import PasswordReset from '@/layouts/Auth/PasswordReset';

import ProtectRoutes from "@/layouts/_router/ProtectRoutes";
import LayoutDefaultRoutes from "@/layouts/Default/_router";
import LayoutDefaultRoutes2 from "@/layouts/Default2/_router";


const LayoutRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="password-recovery" element={<PasswordRecovery />} />
      <Route path="password-reset/:hash" element={<PasswordReset />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/*" element={
          <>
            <LayoutDefaultRoutes />
            <LayoutDefaultRoutes2 />
          </>
        } />
      </Route>
    </>
  )
)

export default LayoutRouter