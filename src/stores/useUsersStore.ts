import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  role: string;
  createdAt: string;
};

interface UserStore {
  users: User[];
  loading: boolean;
  addUser: (user: User) => void;
  editUser: (updatedUser: User) => void;
  deleteUser: (id: string) => void;
  clearUsers: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      loading: true,
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
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: "users-data", // local storage key
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            state.setLoading(true);
            setTimeout(() => {
              state.setLoading(false);
            }, 0);
          }
        };
      },
    }
  )
);
