import { create } from "zustand";

interface ModalState {
  showAddUserModal: boolean;
  setShowAddUserModal: (value: boolean) => void;
  showDeleteUserModal: string | null;
  setShowDeleteUserModal: (value: string | null) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  showAddUserModal: false,
  setShowAddUserModal: (value) => set({ showAddUserModal: value }),
  showDeleteUserModal: null,
  setShowDeleteUserModal: (value) => set({ showDeleteUserModal: value }),
}));
