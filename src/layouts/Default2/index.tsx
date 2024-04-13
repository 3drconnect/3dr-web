import useAuthStore from "@/stores/store";
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  const { logout } = useAuthStore();
  return (
    <>
      <h1>Tela Default 2</h1>
      <button onClick={logout}>Logout</button>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export default LayoutDefault;
