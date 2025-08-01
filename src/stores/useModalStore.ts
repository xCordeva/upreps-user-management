import { create } from "zustand";

interface ModalState {
  showAddUserModal: boolean;
  setShowAddUserModal: (value: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  showAddUserModal: false,
  setShowAddUserModal: (value) => set({ showAddUserModal: value }),
}));
