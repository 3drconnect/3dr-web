import React from 'react';

export type ModalAlertProps = {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
  footer?: React.ReactNode;
  onCLickOutside: boolean;
}

export type ModalAlertState = {
  isOpen?: boolean;
  onClose?: () => void;
  setModalData?: (data: ModalAlertProps) => void;
  alerts: ModalAlertProps[];
}