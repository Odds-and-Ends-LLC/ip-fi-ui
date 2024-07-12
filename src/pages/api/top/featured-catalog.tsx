import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { CatalogType } from "@/types";
import { prepareResponse } from "@/utils/common";
import moment from "moment";
import { NextRequest } from "next/server";

const handler = routeHandler().get(async (req: NextRequest, res) => {
  const catalogs = await _prisma.catalog.findMany({
    take: 12,
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
    orderBy: {
      createdAt: "desc",
    },
  });

  const respData: CatalogType[] = [];

  for (let i = 0; i < catalogs.length; i++) {
    const item = catalogs[i];

    const nft = await _prisma.nft.findFirst({
      where: {
        collectionAddress: item.nfts.at(0)?.nft?.collectionAddress,
        tokenId: item.nfts.at(0)?.nft?.tokenId,
      },
    });

    respData.push({
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
      nftCount: item.nfts.length,
      nfts: [],
    });
  }

  return prepareResponse(res, respData);
});

export default handler;
