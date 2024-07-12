import { _prisma } from "@/lib/prisma"
import { Catalog, CatalogStatus, User } from "@prisma/client"
import { NftPayload } from "./types";
import crypto from "crypto";
import moment, { Moment } from "moment";

const create = async (name: string, coverColor: string, creator: User): Promise<Catalog> => {
  const catalog = await _prisma.catalog.create({
    data: {
      name,
      slug: name.toLowerCase(),
      coverColor,
      creatorId: creator.id
    }
  });

  return catalog;
}

const mint = async (catalog: Catalog, tokenId: number, txHash: string, price: number, purchaseDate?: Moment) => {
  const nfts = await _prisma.catalogNfts.findMany({
    where: {
      catalogId: catalog.id,
    },
    include: {
      nft: true,
    }
  });

  const nftName = nfts.map((item) => (item.nft?.collectionAddress ?? "") + (item.nft?.tokenId ?? ""))
    .sort()
    .join();

  const hash = crypto.createHash("md5")
    .update(nftName)
    .digest("hex");

  await _prisma.catalog.update({
    where: {
      id: catalog.id,
    },
    data: {
      contractTokenId: tokenId,
      creationTxHash: txHash,
      catalogHash: hash,
      lastPrice: price,
      createdAt: purchaseDate ? purchaseDate.toISOString() : moment().toISOString(),
      status: CatalogStatus.ACTIVE,
    }
  });

  await _prisma.catalogOwners.create({
    data: {
      userId: catalog.creatorId,
      catalogId: catalog.id,
    }
  });

  await _prisma.catalogSales.create({
    data: {
      catalogId: catalog.id,
      price,
      quantity: 1,
      buyerId: catalog.creatorId,
      purchaseTxHash: txHash,
      purchasedAt: purchaseDate ? purchaseDate.toISOString() : moment().toISOString(),
    }
  })
}

const updateNft = async (catalog: Catalog, add: NftPayload[], remove: NftPayload[]) => {
  if (catalog.status === CatalogStatus.DRAFT) {

    for (let i = 0; i < add.length; i++) {
      const nftToAdd = add[i];
      let nft = await _prisma.derivativeNfts.findFirst({
        where: {
          collectionAddress: nftToAdd.contract,
          tokenId: nftToAdd.tokenId,
        }
      });

      if (!nft) {
        nft = await _prisma.derivativeNfts.create({
          data: {
            collectionAddress: nftToAdd.contract,
            tokenId: nftToAdd.tokenId,
            creatorId: catalog.creatorId,
          }
        })
      }

      await _prisma.catalogNfts.create({
        data: {
          catalogId: catalog.id,
          derivativeNftId: nft.id
        }
      })
    }

    for (let i = 0; i < remove.length; i++) {
      const nftToRemove = add[i];
      let nft = await _prisma.derivativeNfts.findFirst({
        where: {
          collectionAddress: nftToRemove.contract,
          tokenId: nftToRemove.tokenId,
        }
      });

      if (nft) {
        await _prisma.catalogNfts.deleteMany({
          where: {
            catalogId: catalog.id,
            derivativeNftId: nft.id,
          }
        })
      }
    }

  }
}

const update = async (catalog: Catalog, name: string, coverColor: string) => {
  await _prisma.catalog.update({
    where:{
      id: catalog.id,
    },
    data: {
      name,
      slug: name.toLowerCase(),
      coverColor,
    }
  }) 
}

const purchase = async (catalog: Catalog, buyer: User, price: number, txHash: string, purchaseDate?: Moment) => {
  const isOwner = await _prisma.catalogOwners.count({
    where: {
      catalogId: catalog.id,
      userId: buyer.id
    }
  }) > 0;

  if (!isOwner) {
    await _prisma.catalogOwners.create({
      data: {
        userId: buyer.id,
        catalogId: catalog.id,
      }
    });
  }

  await _prisma.catalog.update({
    where: {
      id: catalog.id,
    }, 
    data: {
      lastPrice: price,
    }
  });

  await _prisma.catalogSales.create({
    data: {
      catalogId: catalog.id,
      price,
      quantity: 1,
      buyerId: buyer.id,
      purchaseTxHash: txHash,
      purchasedAt: purchaseDate ? purchaseDate.toISOString() : moment().toISOString(),
    }
  })
}

export const catalog = {
  create,
  purchase,
  updateNft,
  update,
  mint
}
