export const userValidation = {
  firstName: { required: "First name is required" },
  lastName: { required: "Last name is required" },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email address",
    },
  },
  role: { required: "Role is required" },
};
