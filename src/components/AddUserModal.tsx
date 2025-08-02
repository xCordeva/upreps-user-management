"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { User, useUserStore } from "@/stores/useUsersStore";
import { showError, showSuccess } from "@/utils/toast";
import { createUser } from "@/utils/user";
import { userValidation } from "@/utils/validation";
import { useEffect } from "react";

interface AddUserModalProps {
  open: boolean | User | null;
  onOpenChange: (open: boolean | User | null) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export function AddUserModal({ open, onOpenChange }: AddUserModalProps) {
  const isEdit = typeof open === "object" && open !== null;

  const user = isEdit ? (open as User) : null;
  const { editUser, addUser, users } = useUserStore();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (isEdit && user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("email", user.email);
      setValue("role", user.role);
    } else {
      reset();
    }
  }, [isEdit, user, setValue, reset]);

  const onSubmit = (data: FormData) => {
    const isEmailTaken = users.some(
      (u) => u.email === data.email && u.id !== user?.id
    );

    if (isEmailTaken) {
      showError(
        "Sorry, this email is associated with another user. Please try a different email."
      );
      return;
    } else if (isEdit && user) {
      const updatedUser: User = {
        ...user,
        ...data,
      };
      editUser(updatedUser);
      showSuccess("User updated successfully.");
    } else {
      const newUser = createUser(data);

      addUser(newUser);
      showSuccess("User added successfully.");
    }

    setValue("role", "");
    reset();
    onOpenChange(null);
  };

  return (
    <Dialog open={!!open} onOpenChange={(o) => !o && onOpenChange(null)}>
      <DialogContent className="sm:max-w-md max-h-[95vh] overflow-y-auto flex flex-col rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2">
            {isEdit ? "Edit User" : "Add New User"}
          </DialogTitle>
          <DialogDescription className="text-center mb-4">
            {isEdit
              ? "Enter the user's details below to create a new account and assign a role."
              : "Modify the account details below to update user information and assign a new role."}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-1"
        >
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName", userValidation.firstName)}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName", userValidation.lastName)}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email", userValidation.email)}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="role">Role</Label>
            <Select
              defaultValue={isEdit ? user?.role : undefined}
              onValueChange={(value) => {
                setValue("role", value, { shouldValidate: true });
              }}
            >
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-sm text-red-500 mt-1">{errors.role.message}</p>
            )}
          </div>

          <input type="hidden" {...register("role", userValidation.role)} />

          <Button type="submit" className="mt-4 w-full">
            {isEdit ? "Edit User" : "Add User"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
