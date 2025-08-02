import { create } from "zustand";
import { User } from "./useUsersStore";

interface ModalState {
  showAddUserModal: boolean | User | null;
  setShowAddUserModal: (value: boolean | User | null) => void;
  showDeleteUserModal: string | null;
  setShowDeleteUserModal: (value: string | null) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  showAddUserModal: false,
  setShowAddUserModal: (value) => set({ showAddUserModal: value }),
  showDeleteUserModal: null,
  setShowDeleteUserModal: (value) => set({ showDeleteUserModal: value }),
}));
