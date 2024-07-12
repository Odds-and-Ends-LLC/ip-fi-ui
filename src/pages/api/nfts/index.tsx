import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
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
        page: string;
      }>
    >,
    res
  ) => {
    const { page } = req.query;
    const currentPage = page ? Number(page) : 1;
    const take = 12;
    const skip = (currentPage - 1) * take;

    const nftItems = await _prisma.nft.findMany({
      orderBy: {
        price: "desc",
      },
      take,
      skip,
    });

    const total = await _prisma.nft.count();

    const nftList: NFTType[] = [];

    for (let i = 0; i < nftItems.length; i++) {
      const item = nftItems[i];
      const nftData: Nft = JSON.parse(JSON.stringify(item.alchemyData)) as Nft;

      const nftItem: NFTType = {
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
        traits: nftData.raw.metadata.attribute,
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

      nftList.push(nftItem);
    }

    return prepareResponse(res, {
      data: nftList,
      hasNextPage: Math.ceil(total / take) > currentPage,
      page,
    });
  }
);

export default handler;
