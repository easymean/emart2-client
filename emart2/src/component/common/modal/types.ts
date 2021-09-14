export interface ModalProps {
  className?: string;
  show: boolean;
  children: React.ReactNode;
  onClose?: (e) => void;
}
