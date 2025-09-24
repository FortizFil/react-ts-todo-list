import type { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => (
  <div className="fixed inset-0 bg-black/50  flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      {children}
    </div>
  </div>
);
