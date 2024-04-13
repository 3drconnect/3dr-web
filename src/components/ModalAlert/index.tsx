// components/ModalAlert/index.tsx
import { useModalAlertStore } from "./store";

const ModalAlertList = () => {
  const { alerts } = useModalAlertStore();

  const handleModalClose = () => {
    // Fecha a modal atual e remove o alerta da lista
    useModalAlertStore.setState({ isOpen: false });
    useModalAlertStore.setState((state) => ({ alerts: state.alerts.slice(1) }));
  };

  return (
    alerts.length > 0 && (
      <div
        className="overlay"
        onClick={() =>
          alerts[0].onCLickOutside == true ? handleModalClose() : null
        }
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="header-container">
            <div className="icon">{alerts[0].icon}</div>
            <div className="title">{alerts[0].title}</div>
          </div>

          <div className="content">{alerts[0].content}</div>

          <div className="footer">{alerts[0].footer}</div>

          <button onClick={handleModalClose}>Fechar</button>
        </div>
      </div>
    )
  );
};

export default ModalAlertList;
