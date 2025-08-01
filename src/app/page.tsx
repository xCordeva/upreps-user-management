"use client";
import { AddUserModal } from "@/components/AddUserModal";
import ContentArea from "@/components/ContentArea";
import Sidebar from "@/components/sidebar";
import { useSidebarStore } from "@/stores/useCollapseSidebarStore";
import { useModalStore } from "@/stores/useModalStore";

export default function Home() {
  const { isCollapsed } = useSidebarStore();
  const { showAddUserModal, setShowAddUserModal } = useModalStore();
  return (
    <div className="flex h-screen w-full bg-[#f2f2f2]">
      <div
        className={`${
          isCollapsed ? "w-10" : "w-50"
        } flex-shrink-0 transition-all duration-300 hidden md:flex`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-1  md:p-2">
        <ContentArea />
      </div>
      <AddUserModal
        open={showAddUserModal}
        onOpenChange={setShowAddUserModal}
      />
    </div>
  );
}
