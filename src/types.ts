export type JustifyType = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | string;
export type AlignType = "start" | "center" | "left" | "right" | string;

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

export interface LandingUpdate {
  date: number;
  type: "blog" | string;
  title: string;
  image: string;
};
