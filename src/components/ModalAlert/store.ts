import { create } from 'zustand';
import { ModalAlertState } from './types';

export const useModalAlertStore = create<ModalAlertState>((set) => ({
  alerts: [],
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  setModalData: (data) => set({ ...data, isOpen: true }),
}));