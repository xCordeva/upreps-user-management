import { create } from "zustand";

interface SidebarState {
  isCollapsed: boolean;
  toggleSidebarMenu: () => void;
  setCollapsed: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  isCollapsed: false,
  toggleSidebarMenu: () =>
    set((state) => ({
      isCollapsed: !state.isCollapsed,
    })),
  setCollapsed: (value) =>
    set(() => ({
      isCollapsed: value,
    })),
}));
