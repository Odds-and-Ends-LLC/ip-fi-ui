import { Nft } from "@prisma/client"
import { NftPayload } from "./types"
import { _prisma } from "@/lib/prisma"
import alchemy from "@/lib/alchemy";
import { NftTokenType } from "alchemy-sdk";
import moment from "moment";

const show = async (nft: NftPayload): Promise<Nft> => {
  let currentData = await _prisma.nft.findFirst({
    where: {
      collectionAddress: nft.contract,
      tokenId: nft.tokenId
    }
  });
  
  if (currentData) {
    if (moment(currentData.lastCachedDate).add(5, "minutes").isBefore(moment())) {
      const respData = await alchemy.nft.getNftMetadata(nft.contract, nft.tokenId, {
        tokenType: NftTokenType.ERC721,
        tokenUriTimeoutInMs: 0,
      });

      currentData = await _prisma.nft.update({
        where: {
          id: currentData.id
        },
        data: {
          alchemyData: JSON.parse(JSON.stringify(respData)),
          imageUrl: respData.image.cachedUrl,
          lastCachedDate: moment().toISOString(),
          views: currentData.views + 1,
        }
      })
    }
  } else {
    const respData = await alchemy.nft.getNftMetadata(nft.contract, nft.tokenId, {
      tokenType: NftTokenType.ERC721,
      tokenUriTimeoutInMs: 0,
    });

    currentData = await _prisma.nft.create({
      data: {
        collectionAddress: nft.contract,
        tokenId: nft.tokenId,
        imageUrl: respData.image.cachedUrl,
        alchemyData: JSON.parse(JSON.stringify(respData)),
        views: 1,
      }
    })
  }

  return currentData;
}

const purchase = async (nft: NftPayload) => {
  //temporary calculation

  let currentData = await _prisma.nft.findFirst({
    where: {
      collectionAddress: nft.contract,
      tokenId: nft.tokenId,
    }
  })

  if (currentData) {
    const updatedPrice = currentData.price === 0 ? 0.05 : currentData.price * 1.5;

    await _prisma.nft.update({
      where: {
        id: currentData.id
      },
      data: {
        price: updatedPrice,
        amountEarned: currentData.amountEarned + updatedPrice,
      }
    })
  }
}

export const nft = {
  show,
  purchase
}
