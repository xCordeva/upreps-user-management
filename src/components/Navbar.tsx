"use client";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import {
  House,
  LayoutDashboard,
  Users,
  FileChartPie,
  Settings,
  Bell,
  Menu,
} from "lucide-react";
import { showError } from "@/utils/toast";
import Image from "next/image";

export default function Navbar() {
  const navItems = [
    { label: "Home", icon: House },
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "User Management", icon: Users },
    { label: "Analytics", icon: FileChartPie },
    { label: "Settings", icon: Settings },
    { label: "Notifications", icon: Bell },
  ];

  const handleClick = (label: string) => {
    if (label === "User Management") return;
    showError("This button is for UI purposes only and has no functionality.");
  };

  return (
    <nav className="flex md:hidden justify-between items-center p-2 shadow-md bg-white w-full z-50 border-gray-300 border-b bg-white/80 backdrop-blur-md sticky">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/logo.png"
          alt="upreps-logo"
          height={40}
          width={40}
          className="object-contain shadow-lg rounded"
        />
        <h3 className="text-2xl font-bold">Upreps</h3>
      </div>
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-2">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => handleClick(label)}
                >
                  <Icon size={18} />
                  {label}
                </Button>
              ))}
            </div>
            <SheetTitle></SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
