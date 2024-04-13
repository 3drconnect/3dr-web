import { useModalAlertStore } from "@/components/ModalAlert/store";
import usePasswordRecoveryStore from "./store";
import { useNavigate } from "react-router-dom";

function PasswordRecovery() {
  const alerts = [
    {
      title: "E-mail enviado com sucesso",
      content: "Verifique sua caixa de entrada.",
      icon: "",
      onCLickOutside: true,
    },
  ];
  const { setValue, PasswordRecoveryState } = usePasswordRecoveryStore();
  const navigate = useNavigate();
  return (
    <div className="password-recovery-container">
      <div className="input-container">
        <p>Email:</p>
        <input
          type="text"
          name="email"
          value={PasswordRecoveryState.email}
          onChange={(e) =>
            setValue("PasswordRecoveryState.email", e.target.value)
          }
        />
      </div>
      <button
        onClick={() => {
          if (PasswordRecoveryState.email == "") return;
          setValue("PasswordRecoveryState.email", "");
          navigate("/login");
          useModalAlertStore.setState({ alerts, isOpen: true });
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default PasswordRecovery;
