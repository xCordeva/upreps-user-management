"use client";

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
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { useModalStore } from "@/stores/useModalStore";
import { useUserStore } from "@/stores/useUsersStore";
import { formatCreatedAt } from "@/utils/date";
import EllipseMenu from "./EllipseMenu";
import FilterDropdown from "./FilterDropdown";
import { useFilterUsers } from "@/hooks/useFilterUsers";

export default function UsersContainer() {
  const { users } = useUserStore();
  const { setShowAddUserModal } = useModalStore();

  const {
    displayedUsers,
    roleFilter,
    setRoleFilter,
    dateSort,
    setDateSort,
    searchQuery,
    setSearchQuery,
  } = useFilterUsers(users);

  return (
    <div className="w-full mx-auto border-none shadow-none rounded-none flex h-[90vh] flex-col">
      {/* Header with controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">
          All users{" "}
          <span className="text-gray-500 font-normal">
            {displayedUsers.length}
          </span>
        </h2>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search user by email"
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Dropdown Menu */}
          <FilterDropdown
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
            dateSort={dateSort}
            setDateSort={setDateSort}
          />

          {/* Add User Button */}
          <Button
            className="flex items-center gap-2 bg-black text-white"
            onClick={() => setShowAddUserModal(true)}
          >
            <PlusIcon className="h-4 w-4" />
            Add user
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[50%]">User</TableHead>
            <TableHead className="w-[20%]">Role</TableHead>
            <TableHead className="w-[20%]">Created At</TableHead>
            <TableHead className="w-[10%]"></TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      {/* Table body */}
      {/* Recreating a table since the table element cannot contain divs as children */}
      <div className="flex-1 overflow-y-auto">
        <Table>
          <TableBody>
            {displayedUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <p className="text-center py-10 text-gray-500">
                    No users found.
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              displayedUsers.map((user) => (
                <TableRow key={user.id}>
                  {/* User name cell */}
                  <TableCell className="flex w-[50%]">
                    <Image
                      src={user.avatar}
                      alt={`${user.firstName} ${user.lastName} Avatar`}
                      width={40}
                      height={40}
                      className="rounded-full"
                      unoptimized
                    />
                    <div className="flex flex-col ml-2 w-fit">
                      <span className="font-medium text-gray-900">
                        {`${user.firstName} ${user.lastName}`}
                      </span>
                      <span className="text-sm text-gray-500">
                        {user.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="w-[20%]">
                    <div
                      className={`text-gray-800 w-fit p-1 rounded
                      ${
                        user.role === "Admin"
                          ? "bg-green-200"
                          : user.role === "Editor"
                          ? "bg-yellow-200"
                          : "bg-red-200"
                      }`}
                    >
                      {user.role}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-500 w-[20%]">
                    {formatCreatedAt(user.createdAt)}
                  </TableCell>
                  <TableCell className="w-[10%]">
                    <EllipseMenu user={user} />
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
