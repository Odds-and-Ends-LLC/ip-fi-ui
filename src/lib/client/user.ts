import { users } from "@/data";

export const checkIfUsernameAvailable = async (username: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return true;
  } catch (error) {
    console.log("failed to check username availability");
    return null;
  }
};

export const getFeaturedUsers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return users.slice(0, 12);
  } catch (error) {
    console.log("failed to fetch featured users");
    return null;
  }
};
