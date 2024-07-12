import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { CatalogType, NFTType, Override, QueryString } from "@/types";
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
        slug: string;
      }>
    >,
    res
  ) => {
    const { slug } = req.query;
    let resultData: CatalogType | undefined = undefined;

    const item = await _prisma.catalog.findFirst({
      where: {
        slug,
      },
      include: {
        creator: true,
        nfts: {
          include: {
            nft: {
              include: {
                nftData: true,
              },
            },
          },
          orderBy: {
            id: "asc",
          },
        },
      },
    });

    if (item) {
      const nftList: NFTType[] = [];

      item.nfts.forEach((derivativeItem) => {
        const nft = derivativeItem.nft?.nftData;

        if (nft) {
          const nftData: Nft = JSON.parse(
            JSON.stringify(nft.alchemyData)
          ) as Nft;

          const nftItem: NFTType = {
            id: nft.id.toString(),
            name: nftData.name ?? "",
            collectionName: nftData.collection?.name ?? "",
            collectionAddress: nft.collectionAddress,
            withExclusiveLicense: true,
            ownerName: "",
            ownerUserId: "",
            ownerLastActive: moment().toDate(),
            contractAddress: nft.collectionAddress,
            tokenId: nft.tokenId,
            tokenStandard: "ERC-721",
            blockchain: "ethereum",
            contractProposals: 0,
            activeContracts: 0,
            endedContracts: 0,
            views: nft.views,
            amountEarned: _.round(nft.amountEarned, 2),
            averageContractLength: "1 week",
            traits: nftData.raw.metadata.attribute,
            private: false,
            image: nft.imageUrl ?? "/images/image_2.png",
            price: _.round(nft.price, 2),
            catalogCount: 0,
            opensea: "",
            looksRare: "",
            currentPrice: _.round(nft.price, 2),
            currentTermLength: "1 year",
            catalogHolderCount: 0,
            currentHolderOwnershipLength: "1 year",
          };

          nftList.push(nftItem);
        }
      })

      resultData = {
        id: item.id.toString(),
        uid: item.slug,
        name: item.name,
        createdAt: moment(item.createdAt).toDate(),
        coverImageNFTId: item.nfts.at(0)?.nft?.nftData.tokenId ?? "",
        coverImage:
          item.nfts.at(0)?.nft?.nftData.imageUrl ?? "/images/image_2.png",
        coverColor: item.coverColor ?? "",
        creatorName: item.creator.username ?? "",
        creatorUserId: item.creator.username ?? "",
        nfts: nftList,
      };
    }

    return prepareResponse(res, resultData);
  }
);

export default handler;
