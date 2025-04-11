// BaseModal.tsx
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface BaseModalProps {
  onClose: () => void;
  children: ReactNode;
  container?: HTMLElement | null;
  closeOnClickOutside?: boolean;
  positionClassName?: string; // e.g., center, bottom
  sizeClassName?: string; // e.g., w-[95%] max-w-[560px]
  className?: string;
}

const BaseModal = ({
  onClose,
  children,
  container = null,
  closeOnClickOutside = true,
  positionClassName = "items-center justify-center", // default center
  sizeClassName = "w-[95%] max-w-[560px] max-h-[95vh]",
  className = "",
}: BaseModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const targetContainer = container || document.body;

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        closeOnClickOutside &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    const overlay = modalRef.current?.parentElement;

    window.addEventListener("keydown", handleKeyDown);
    overlay?.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      overlay?.removeEventListener("click", handleClickOutside);
    };
  }, [onClose, closeOnClickOutside]);

  return createPortal(
    <div
      className={`fixed inset-0 z-[107] flex ${positionClassName} bg-[rgba(40,40,40,0.6)]`}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`focus:outline-none bg-white rounded-2xl shadow-xl overflow-auto ${sizeClassName} ${className}`}
      >
        {children}
      </div>
    </div>,
    targetContainer,
  );
};

export default BaseModal;
