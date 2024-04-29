export interface User {
  id: string;
  email: string;
  username: string;
  pfp: string;
  walletAddress: string;
  // add more details here
};

export interface Session {
  userId: string;
  email: string;
  username: string;
  walletAddress: string;
};
