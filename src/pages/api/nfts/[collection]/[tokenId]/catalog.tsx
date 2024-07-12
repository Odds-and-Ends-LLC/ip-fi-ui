import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { nft as nftService } from "@/services";
import { NFTCatalogType, NFTType, Override, QueryString } from "@/types";
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
        page: string;
      }>
    >,
    res
  ) => {
    const { collection, tokenId, page } = req.query;
    const currentPage = page ? Number(page) : 1;
    const take = 10;
    const skip = (currentPage - 1) * take;
    const resultData: NFTCatalogType[] = [];
    let hasNextPage = false;

    const derivativeNft = await _prisma.derivativeNfts.findFirst({
      where: {
        nftData: {
          collectionAddress: collection,
          tokenId,
        },
      },
    });

    if (derivativeNft) {
      const catalogs = await _prisma.catalog.findMany({
        where: {
          nfts: {
            some: {
              derivativeNftId: derivativeNft.id,
            },
          },
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

      const nft = await _prisma.nft.findFirst({
        where: {
          collectionAddress: collection,
          tokenId: tokenId,
        },
      });

      if (nft) {
        const nftData: Nft = JSON.parse(JSON.stringify(nft.alchemyData)) as Nft;
        catalogs.forEach((item) => {
          resultData.push({
            catalogUid: item.slug,
            catalogCoverImage:
              item.nfts.at(0)?.nft?.nftData.imageUrl ?? "/images/image_2.png",
            catalogName: item.name,
            royalty: "0 $NULL per 5 years",
            status: "active",
            nftName: nftData.name ?? "",
            collectionName: nftData.contract.name ?? "",
            licensorName: "",
            licenseeName: item.creator.username ?? "",
          });
        });
      }
    }

    return prepareResponse(res, {
      data: resultData,
      hasNextPage,
      page,
    });
  }
);

export default handler;
