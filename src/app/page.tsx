"use client";
import Sidebar from "@/components/sidebar";
import { useSidebarStore } from "@/stores/useCollapseSidebarStore";

export default function Home() {
  const { isCollapsed } = useSidebarStore();
  return (
    <div className="flex h-screen w-full bg-[#f2f2f2]">
      <div
        className={`flex-1 p-0 mb-18 md:mb-0 flex  md:h-auto
        ${isCollapsed ? "w-10" : "w-50"} 
        `}
      >
        <Sidebar />
      </div>
    </div>
  );
}
