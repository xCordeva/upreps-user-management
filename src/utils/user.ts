import { v4 as uuidv4 } from "uuid";

// hex code colors to use as bg
const avatarColors = [
  "FFC107", // Amber
  "00BCD4", // Cyan
  "9C27B0", // Purple
  "FF5722", // Deep Orange
  "4CAF50", // Green
  "2196F3", // Blue
  "E91E63", // Pink
  "607D8B", // Blue Grey
];

// func to choose a random bg color for each new user
function getRandomColor() {
  const index = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[index];
}

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export function createUser(data: UserData) {
  const bgColor = getRandomColor();

  return {
    id: uuidv4(),
    firstName: data.firstName,
    lastName: data.lastName,
    avatar: `https://placehold.co/40x40/${bgColor}/4B2548?text=${data.firstName[0]}${data.lastName[0]}`,
    email: data.email,
    role: data.role,
    createdAt: new Date().toISOString(),
  };
}
