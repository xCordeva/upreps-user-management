"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUserStore } from "@/stores/useUsersStore";
import { showSuccess } from "@/utils/toast";
import { TriangleAlert } from "lucide-react";

interface DeleteUserModalProps {
  userId: string | null;
  onOpenChange: (open: string | null) => void;
}

export function DeleteUserModal({
  userId,
  onOpenChange,
}: DeleteUserModalProps) {
  const { deleteUser } = useUserStore();
  const handleDelete = () => {
    if (!userId) return;
    deleteUser(userId);
    showSuccess("User deleted successfully.");
    onOpenChange(null);
  };

  return (
    <Dialog
      open={!!userId}
      onOpenChange={(open) => {
        if (!open) {
          onOpenChange(null);
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <TriangleAlert />
            Confirm User Deletion
          </DialogTitle>
          <DialogDescription>
            All user data will be permanently deleted and cannot be recovered.
            This action is irreversible.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClick={handleDelete}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            Yes, I’m sure. Delete user
          </Button>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => onOpenChange(null)}
          >
            No, cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
