import { User } from "@/stores/useUsersStore";
import { useMemo, useState } from "react";

export const useFilterUsers = (users: User[]) => {
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [dateSort, setDateSort] = useState<string>("newest");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const displayedUsers = useMemo(() => {
    let filteredUsers = [...users];

    if (roleFilter !== "all") {
      filteredUsers = filteredUsers.filter((user) => user.role === roleFilter);
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filteredUsers = filteredUsers.filter((user) =>
        user.email.toLowerCase().includes(lowerCaseQuery)
      );
    }

    if (dateSort === "newest") {
      filteredUsers.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } else if (dateSort === "oldest") {
      filteredUsers.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }
    return filteredUsers;
  }, [users, roleFilter, dateSort, searchQuery]);

  return {
    displayedUsers,
    roleFilter,
    setRoleFilter,
    dateSort,
    setDateSort,
    searchQuery,
    setSearchQuery,
  };
};
