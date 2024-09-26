export interface ModalTitleProps {
  children: string;
}

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export interface ModalTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
}

export interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  modalId: string;
}

export interface ModalContentProps {
  children: React.ReactNode;
}
