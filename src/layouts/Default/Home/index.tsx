// screens/HomeScreen.tsx
import ModalAlertList from '@/components/ModalAlert';
import { useModalAlertStore } from '@/components/ModalAlert/store';

const HomeScreen = () => {
  const alerts = [
    {
      icon: '',
      title: 'Título da Modal 1',
      content: 'Conteúdo da modal 1 aqui.',
      footer: <div>Rodapé</div>,
      onCLickOutside: true,
    },
    {
      icon: '',
      title: 'Título da Modal 2',
      content: 'Conteúdo da modal 2 aqui.',
      footer: <div>Rodapé</div>,
      onCLickOutside: true,
    },
    // Adicione mais objetos conforme necessário
  ];

  const handleOpenModals = () => {
    // Abre as modals quando o botão é clicado
    useModalAlertStore.setState({ alerts, isOpen: true });
  };

  return (
    <>
      <h1>Minha Tela Inicial</h1>
      <button onClick={handleOpenModals}>Abrir Modais</button>
      <ModalAlertList />
    </>
  );
};

export default HomeScreen;
