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
import UsersPagination from "./UsersPagination";

export default function UsersContainer() {
  const { users, loading } = useUserStore();
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

  const [currentPage, setCurrentPage] = React.useState(1);

  const paginatedUsers = displayedUsers.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div className="w-full mx-auto border-none shadow-none rounded-none flex flex-col md:p-0 p-4 max-w-screen">
      {/* Header with controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">
          All users{" "}
          <span className="text-gray-500 font-normal">
            {displayedUsers.length}
          </span>
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-4 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow w-full">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search user by email"
              className="w-full pl-8 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4 md:flex-row w-full justify-end">
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
      </div>

      {/* Users Table */}
      <div className="relative w-full overflow-x-auto overflow-y-auto flex-grow h-[calc(100vh-15rem)]">
        <Table>
          {/* Table Header */}
          <TableHeader className="bg-gray-50 sticky top-0 z-10">
            <TableRow>
              <TableHead className="w-[55%]">User</TableHead>
              <TableHead className="w-[20%]">Role</TableHead>
              <TableHead className="w-[20%]">Date added</TableHead>
              <TableHead className="w-[5%]"></TableHead>
            </TableRow>
          </TableHeader>
          {/* Table Body*/}
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <p className="text-center py-10">
                    <span className="loader"></span>
                  </p>
                </TableCell>
              </TableRow>
            ) : displayedUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <p className="text-center py-10 text-gray-500">
                    No users found.
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="w-[55%]">
                    <div className="flex items-center">
                      <Image
                        src={user.avatar}
                        alt={`${user.firstName} ${user.lastName} Avatar`}
                        width={30}
                        height={30}
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
                  <TableCell className="w-[20%]">
                    {formatCreatedAt(user.createdAt)}
                  </TableCell>
                  <TableCell className="w-[5%]">
                    <EllipseMenu user={user} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <UsersPagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        displayedUsers={displayedUsers}
      />
    </div>
  );
}
