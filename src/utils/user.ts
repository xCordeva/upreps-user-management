import { v4 as uuidv4 } from "uuid";

// hex code colors to use as bg
const avatarColors = [
  "4B2548", // purple
  "E8D2E7", // pinkish
  "F5C9C8", // light pink
  "C4D1E8", // light blue
  "DEE8E9", // light cyan
  "E8C9D5", // soft pink
  "E8D6C9", // beige
  "C9E8D0", // mint
  "D6C9E8", // lavender
];

// func to choose a random bg color for each new user
function getRandomColor() {
  const index = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[index];
}

export function createUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}) {
  const bgColor = getRandomColor();
  return {
    id: uuidv4(),
    name: `${data.firstName} ${data.lastName}`,
    avatar: `https://placehold.co/40x40/${bgColor}/4B2548?text=${data.firstName[0]}${data.lastName[0]}`,
    email: data.email,
    role: data.role,
    createdAt: new Date().toISOString(),
  };
}
