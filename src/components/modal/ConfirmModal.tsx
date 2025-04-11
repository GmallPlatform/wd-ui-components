// ConfirmModal.tsx
import { Icon_window_close } from "../Icons/Icons";
import { PrimaryButton, SecondaryButton } from "../ui/buttons/Buttons";
import { TertiaryIconButton } from "../ui/buttons/IconButtons";
import BaseModal from "./BaseModal";
import { ReactNode } from "react";
interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmLabel?: string;
  cancelLabel?: string;
  children: ReactNode;
}

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  children,
}: ConfirmModalProps) => {
  if (!open) return null;

  return (
    <BaseModal
      positionClassName="items-center justify-center"
      onClose={onClose}
    >
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-gray-50 rounded-t-2xl">
        <span className="text-xl font-medium">{title}</span>
        <TertiaryIconButton
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <Icon_window_close />
        </TertiaryIconButton>
      </div>
      <div className="flex flex-col px-6 py-4 gap-2">{children}</div>

      <div className="flex justify-end items-center gap-4 px-6 py-3 border-t border-gray-200">
        <SecondaryButton onClick={onClose}>{cancelLabel}</SecondaryButton>

        <PrimaryButton onClick={onConfirm}>{confirmLabel}</PrimaryButton>
      </div>
    </BaseModal>
  );
};

export { ConfirmModal };
