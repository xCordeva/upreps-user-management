import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: string;
  createdAt: string;
};

interface UserStore {
  users: User[];
  addUser: (user: User) => void;
  editUser: (updatedUser: User) => void;
  deleteUser: (id: string) => void;
  clearUsers: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
        })),
      editUser: (updatedUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
      clearUsers: () => set({ users: [] }),
    }),
    {
      name: "users-data", // local storage key
    }
  )
);
