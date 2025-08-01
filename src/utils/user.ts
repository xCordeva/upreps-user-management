import { v4 as uuidv4 } from "uuid";

export function createUser(data: {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}) {
  return {
    // new user object concatenating name, adding avatar using first letters of first nad last name, and adding a timestamp
    id: uuidv4(),
    name: `${data.firstName} ${data.lastName}`,
    avatar: `https://placehold.co/40x40/D6C9E8/4B2548?text=${data.firstName[0]}${data.lastName[0]}`,
    email: data.email,
    role: data.role,
    createdAt: new Date().toISOString(),
  };
}
