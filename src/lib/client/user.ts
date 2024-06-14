export const checkIfUsernameAvailable = async (username: string) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return true;
  } catch (error) {
    console.log("failed to check username availability");
    return null;
  }
};
