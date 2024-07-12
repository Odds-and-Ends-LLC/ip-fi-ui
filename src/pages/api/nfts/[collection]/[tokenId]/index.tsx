import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { nft as nftService } from "@/services";
import { NFTType, Override, QueryString } from "@/types";
import { prepareResponse } from "@/utils/common";
import { Nft } from "alchemy-sdk";
import _ from "lodash";
import moment from "moment";
import { NextRequest } from "next/server";

const handler = routeHandler().get(
  async (
    req: Override<
      NextRequest,
      QueryString<{
        collection: string;
        tokenId: string;
      }>
    >,
    res
  ) => {
    const { collection, tokenId } = req.query;
    let resultData: NFTType | undefined = undefined;

    const item = await nftService.show({
      contract: collection,
      tokenId,
    });

    const nftData: Nft = JSON.parse(JSON.stringify(item.alchemyData)) as Nft;

    resultData = {
      id: item.id.toString(),
      name: nftData.name ?? "",
      collectionName: nftData.collection?.name ?? "",
      collectionAddress: item.collectionAddress,
      withExclusiveLicense: true,
      ownerName: "",
      ownerUserId: "",
      ownerLastActive: moment().toDate(),
      contractAddress: item.collectionAddress,
      tokenId: item.tokenId,
      tokenStandard: "ERC-721",
      blockchain: "ethereum",
      contractProposals: 0,
      activeContracts: 0,
      endedContracts: 0,
      views: item.views,
      amountEarned: _.round(item.amountEarned, 2),
      averageContractLength: "1 week",
      traits: nftData.raw.metadata.attributes,
      private: false,
      image: item.imageUrl ?? "/images/image_2.png",
      price: _.round(item.price, 2),
      catalogCount: 0,
      opensea: "",
      looksRare: "",
      currentPrice: _.round(item.price, 2),
      currentTermLength: "1 year",
      catalogHolderCount: 0,
      currentHolderOwnershipLength: "1 year",
    };

    return prepareResponse(res, resultData);
  }
);

export default handler;
