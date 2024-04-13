import useLoginStore from "@/layouts/Auth/Login/store";
import { loginRequest } from "@/layouts/Auth/Login/service";
import { useNavigate } from "react-router-dom";

import ModalAlertList from "@/components/ModalAlert";
const LoginComponent = () => {
  const { loginData, setValue } = useLoginStore();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="input-container">
        <p>Login:</p>
        <input
          type="text"
          name="name"
          value={loginData.userName}
          onChange={(e) => setValue("loginData.userName", e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <p>Password:</p>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) => setValue("loginData.password", e.target.value)}
          className="input"
        />
      </div>
      <button
        onClick={() => {
          loginRequest({
            user: loginData.userName,
            password: loginData.password,
          }).then((response) => {
            if (response === 200) {
              navigate("/home");
            }
          });
        }}
      >
        Login
      </button>
      <div>
        <a href="/password-recovery">Esqueceu sua senha?</a>
      </div>
      <ModalAlertList />
    </div>
  );
};

export default LoginComponent;
