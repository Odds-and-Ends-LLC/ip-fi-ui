import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.BASE_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy;
