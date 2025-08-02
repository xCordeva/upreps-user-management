"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Funnel, ChevronDownIcon } from "lucide-react";

type FilterDropdownProps = {
  roleFilter: string;
  setRoleFilter: (value: string) => void;
  dateSort: string;
  setDateSort: (value: string) => void;
};

export default function FilterDropdown({
  roleFilter,
  setRoleFilter,
  dateSort,
  setDateSort,
}: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Funnel className="h-4 w-4 text-gray-500" />
          Filters
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={roleFilter}
          onValueChange={setRoleFilter}
        >
          <DropdownMenuRadioItem value="all">All Roles</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Admin">Admin</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Editor">Editor</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="User">User</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Sort by Date Added</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={dateSort} onValueChange={setDateSort}>
          <DropdownMenuRadioItem value="newest">
            Newest to Oldest
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="oldest">
            Oldest to Newest
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
