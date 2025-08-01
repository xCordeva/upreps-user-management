"use client";
import { showError } from "@/utils/toast";
import { Button } from "./ui/button";
import {
  Users,
  LayoutDashboard,
  FileChartPie,
  House,
  Bell,
  Settings,
  PanelRightOpen,
} from "lucide-react";
import { useSidebarStore } from "@/stores/useCollapseSidebarStore";
import Image from "next/image";

export default function Sidebar() {
  const handleButtonClicks = () => {
    showError("This button is for UI purposes only and has no functionality.");
  };
  const { isCollapsed, toggleSidebarMenu } = useSidebarStore();
  return (
    <div
      className={`flex flex-col justify-between min-h-screen py-2 px-2 transition-all duration-300  
        ${isCollapsed ? "w-10" : "w-50"}
      `}
    >
      <div className="flex align-center gap-2">
        <Image
          src="/logo.png"
          alt="upreps-logo"
          height={40}
          width={40}
          className="object-contain shadow-lg rounded"
        ></Image>
        <h1
          className={`text-4xl font-bold transition-all m-0 p-0 duration-300 ${
            isCollapsed ? "h-0 opacity-0" : "h-8 opacity-100"
          }`}
        >
          Upreps
        </h1>
      </div>
      <div className="flex flex-col justify-start py-4 space-y-4 h-[50%]">
        <Button
          className={`hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start bg-transparent text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          onClick={handleButtonClicks}
        >
          <House /> {!isCollapsed && <span>Home</span>}
        </Button>
        <Button
          className={`hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start bg-transparent text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          onClick={handleButtonClicks}
        >
          <LayoutDashboard />
          {!isCollapsed && <span>Dashboard</span>}
        </Button>
        <Button
          className={`bg-gray-300 font-semibold hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
        >
          <Users />
          {!isCollapsed && <span>User Management</span>}
        </Button>
        <Button
          className={`hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start bg-transparent text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          onClick={handleButtonClicks}
        >
          <FileChartPie />

          {!isCollapsed && <span>Analytics</span>}
        </Button>
      </div>
      <div
        className={`h-[50%] flex flex-col justify-end py-2 space-y-4 transition-all duration-300  
        `}
      >
        <Button
          className={`hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start bg-transparent text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          onClick={handleButtonClicks}
        >
          <Settings />
          {!isCollapsed && <span>Settings</span>}
        </Button>
        <Button
          className={`hover:bg-gray-200 overflow-hidden gap-3 shadow-none justify-start bg-transparent text-black ${
            isCollapsed ? "justify-center" : "justify-start"
          }`}
          onClick={handleButtonClicks}
        >
          <Bell />
          {!isCollapsed && <span>Notifications</span>}
        </Button>
        <PanelRightOpen
          size={25}
          onClick={toggleSidebarMenu}
          className={`transition-transform duration-300 cursor-pointer 
            ${isCollapsed ? "rotate-180" : ""}
        `}
        />
      </div>
    </div>
  );
}
