import * as React from "react";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/stores/useUsersStore";
import { useModalStore } from "@/stores/useModalStore";

export default function EllipseMenu({ user }: { user: User }) {
  const { setShowDeleteUserModal, setShowAddUserModal } = useModalStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="text-gray-400 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-28">
        <DropdownMenuItem onClick={() => setShowAddUserModal(user)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-600"
          onClick={() => setShowDeleteUserModal(user.id)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
