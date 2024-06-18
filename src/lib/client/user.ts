import { users } from "@/data";

export const checkIfUsernameAvailable = async (username: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return true
  } catch (error) {
    console.log("failed to check username availability");
    return {
      error: "Failed to check username availability at this time.",
    };
  }
};

export const getFeaturedUsers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
      sucess: true,
      data: users.slice(0, 12),
    }
  } catch (error) {
    console.log("failed to fetch featured users");
    return {
      error: "Failed to fetch featured users at this time.",
    };
  }
};
