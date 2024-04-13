import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/stores/store";

export default function ProtecteRoutes() {
  const { getTokenLocalStorage } = useAuthStore();

  if (!getTokenLocalStorage().length || getTokenLocalStorage().length < 1) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}
