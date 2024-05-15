export interface UserSignupData {
  username: string;
  email: string;
  password: string;
  about?: string;
  walletAddresses: string[];
}
