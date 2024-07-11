import { catalogs, marketCatalogs, nfts, users } from "@/data";
import axios from "axios";

export const checkIfUsernameAvailable = async (username: string) => {
  try {
    const { data: { data: result} } = await axios.get("/api/auth/verify-username", {
      params: {
        username
      }
    });

    return result.success
  } catch (error) {
    console.log("failed to check username availability");
    return {
      error: "Failed to check username availability at this time.",
    };
  }
};

export const checkIfEmailAvailable = async (email: string) => {
  try {
    const { data: { data: result} } = await axios.get("/api/auth/verify-email", {
      params: {
        email
      }
    });

    return result.success
  } catch (error) {
    console.log("failed to check email availability");
    return {
      error: "Failed to check email availability at this time.",
    };
  }
};

export const getFeaturedUsers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      data: users.slice(0, 12),
    }
  } catch (error) {
    console.log("failed to fetch featured users");
    return {
      error: "Failed to fetch featured users at this time.",
    };
  }
};

export const getUserCatalogs = async (username: string, page: number, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: catalogs.slice(0, 24),
      hasNextPage: true,
      page,
    };
  } catch (error) {
    console.log("failed to fetch user catalogs");
    return {
      error: "Failed to fetch user catalogs at this time."
    }
  }
};

export const getUserCatalogsMarket = async (username: string, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      data: marketCatalogs,
    };
  } catch (error) {
    console.log("failed to fetch catalogs market");
    return {
      error: "Failed to fetch catalogs market at this time."
    }
  }
};

export const getUserNFTs = async (username: string, page: number, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: nfts.slice(0, 24),
      hasNextPage: true,
      page,
    };
  } catch (error) {
    console.log("failed to fetch user nfts");
    return {
      error: "Failed to fetch user nfts at this time."
    }
  }
};

export const getUsers = async (page: number, query?: URLSearchParams) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      data: users.slice(0, 24),
      hasNextPage: true,
      page,
    };
  } catch (error) {
    console.log("failed to fetch users");
    return {
      error: "Failed to fetch users at this time."
    }
  }
};
