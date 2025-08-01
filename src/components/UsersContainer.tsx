import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon, SearchIcon, Funnel, EllipsisVertical } from "lucide-react";
import Image from "next/image";

const usersData = [
  {
    id: "1",
    name: "Ahmed Abdo",
    email: "ahmed@x.com",
    avatar: "https://placehold.co/40x40/E8D2E7/4B2548?text=AA",
    role: "Admin",
    dateAdded: "Aug 1, 2025",
  },
];
export default function UsersContainer() {
  return (
    <div className="w-full mx-auto border-none shadow-none rounded-none flex h-[90vh] flex-col">
      {/* Header with controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">
          All users{" "}
          <span className="text-gray-500 font-normal">{usersData.length}</span>
        </h2>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search" className="w-full pl-8" />
          </div>
          {/* Filters Button */}
          <Button variant="outline" className="flex items-center gap-2">
            Filters
            <Funnel className="h-4 w-4 text-gray-500" />
          </Button>
          {/* Add User Button */}
          <Button className="flex items-center gap-2 bg-black text-white">
            <PlusIcon className="h-4 w-4" />
            Add user
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[40%]">User</TableHead>
            <TableHead className="w-[30%]">Role</TableHead>
            <TableHead className="w-[20%]">Date added</TableHead>
            <TableHead className="w-[10%]"></TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      {/* Table body */}
      {/* Recreating a table since the table element cannot contain divs as children */}
      <div className="flex-1 overflow-y-auto">
        <Table>
          <TableBody>
            {usersData.length === 0 ? (
              <p className="text-center py-10 text-gray-500">No users found.</p>
            ) : (
              usersData.map((user) => (
                <TableRow key={user.id}>
                  {/* User name cell */}
                  <TableCell className="flex w-[40%]">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                      unoptimized
                    />
                    <div className="flex flex-col ml-2 w-fit">
                      <span className="font-medium text-gray-900">
                        {user.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {user.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="w-[30%]">
                    <div
                      className={`bg-gray-200 text-gray-800 w-fit p-1 rounded ${
                        user.role === "Admin" ? "bg-green-200" : "bg-red-200"
                      }`}
                    >
                      {user.role}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 w-[20%]">
                    {user.dateAdded}
                  </TableCell>
                  <TableCell>
                    <EllipsisVertical className="text-gray-400 cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
