import { useModalAlertStore } from "@/components/ModalAlert/store";
import useResetPasswordStore from "./store";
import { useNavigate } from "react-router";

import ModalAlertList from "@/components/ModalAlert";
import { useEffect } from "react";

const PasswordReset = () => {
  const { setValue, ResetPasswordState } = useResetPasswordStore();
  const navigate = useNavigate();

  const alertsPositive = [
    {
      title: "Senha alterada com sucesso",
      content: "Redirecionando para a tela de login",
      icon: "",
      onCLickOutside: true,
    },
  ];
  const alertsNegative = [
    {
      title: "As senhas não conferem",
      content: "Por favor, tente novamente",
      icon: "",
      onCLickOutside: true,
    },
  ];

  const verifyHash = () => {
    // Chama função para verificar hash
    // verifyHashService(hash) {
    // }

    // Seta o valor de email retornado pelo backend
    setValue("ResetPasswordState.email", "teste@teste.com");
  };

  useEffect(() => {
    verifyHash();
  }, []);

  const handleSubmit = () => {
    if (
      ResetPasswordState.password !== ResetPasswordState.confirmPassword ||
      (ResetPasswordState.password === "" &&
        ResetPasswordState.confirmPassword === "")
    ) {
      useModalAlertStore.setState({ alerts: alertsNegative, isOpen: true });
    } else {
      useModalAlertStore.setState({ alerts: alertsPositive, isOpen: true });
      console.log(ResetPasswordState);
      navigate("/login");
    }
  };
  return (
    <div className="reset-password-container">
      <div className="reset-password-title">
        <p>Reset Password</p>
      </div>
      <div className="reset-password-inputs">
        <div>
          <p>Email:</p>
          <input
            type="text"
            name="email"
            value={ResetPasswordState.email}
            readOnly
            disabled
          />
        </div>
        <div className="reset-password-input">
          <p>New Password:</p>
          <input
            type="password"
            name="password"
            value={ResetPasswordState.password}
            onChange={(e) =>
              setValue("ResetPasswordState.password", e.target.value)
            }
          />
        </div>
        <div className="reset-password-input">
          <p>Confirm Password:</p>
          <input
            type="password"
            name="confirmPassword"
            value={ResetPasswordState.confirmPassword}
            onChange={(e) =>
              setValue("ResetPasswordState.confirmPassword", e.target.value)
            }
          />
        </div>
        <div className="reset-password-submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ModalAlertList />
    </div>
  );
};

export default PasswordReset;
