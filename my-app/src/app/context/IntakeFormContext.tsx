"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import IntakeFormModal from "../components/intake-form/IntakeFormModal";

interface IntakeFormContextValue {
  openIntakeForm: () => void;
  closeIntakeForm: () => void;
}

const IntakeFormContext = createContext<IntakeFormContextValue | undefined>(
  undefined
);

export function IntakeFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openIntakeForm = useCallback(() => setIsOpen(true), []);
  const closeIntakeForm = useCallback(() => setIsOpen(false), []);

  return (
    <IntakeFormContext.Provider value={{ openIntakeForm, closeIntakeForm }}>
      {children}
      <IntakeFormModal isOpen={isOpen} onClose={closeIntakeForm} />
    </IntakeFormContext.Provider>
  );
}

export function useIntakeForm() {
  const context = useContext(IntakeFormContext);
  if (!context) {
    throw new Error("useIntakeForm must be used within an IntakeFormProvider");
  }
  return context;
}

export function useIntakeFormSafe() {
  return useContext(IntakeFormContext) ?? null;
}
