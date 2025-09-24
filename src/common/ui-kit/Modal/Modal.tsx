import { useRef } from 'react';
import type { ReactNode } from 'react';

import { useClickOutside } from '@common/hooks';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onClose);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6"
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};
