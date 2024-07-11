import { NextApiResponse } from "next";

export function prepareResponse<T, P>(res: NextApiResponse, data: T, status = 200, extraData?: P) {
  return res.status(status).json({
      success: status >= 200 && status <= 299,
      data,
      ...(extraData ? extraData : {})
  });
};

export const processImageUrl = (url: string): string => {
  let imageUrl = url ?? "/images/empire-coin.png";
  
  if (imageUrl?.includes("ipfs")) {
    imageUrl = imageUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  }

  return imageUrl;
}
