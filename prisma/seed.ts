import { _prisma } from '@/lib/prisma'
import { ConnectedAccountType, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker'
import bcrypt from "bcrypt";
import { catalog as catalogService, nft as nftService } from '../src/services';
import { NftPayload } from '@/services/types';
import moment from 'moment';

const collectionRandom = [
  {
    collectionAddress: "0xee7d1b184be8185adc7052635329152a4d0cdefa",
    maxToken: 9981
  },
  {
    collectionAddress: "0x217ec1ac929a17481446a76ff9b95b9a64f298cf",
    maxToken: 9996
  },
  {
    collectionAddress: "0x475aa716337d79b5ea513bfe4cc01787eb2e6004",
    maxToken: 3333
  },
  {
    collectionAddress: "0xebb3c843490755a061e4a1e7c7da8033b16d07e5",
    maxToken: 1474
  },
  {
    collectionAddress: "0x6ecb28a4cf39c5689b8461b380dcbb79c166ba14",
    maxToken: 1985
  },
  {
    collectionAddress: "0x0bff76ae95be2de35e145cd4af0963da50e16d4c",
    maxToken: 2024
  },
  {
    collectionAddress: "0xef57ec3a9f8f38680aed024b7cd8d2154c69b9f0",
    maxToken: 4733
  },
  {
    collectionAddress: "0x931189e9cb1a3f721ea7464da4bbdb457bc9dae8",
    maxToken: 800
  },
];

const generateRandomNfts = (): NftPayload[] => {
  const nftList: NftPayload[] = [];

  for (let i = 0; i < 20; i++) {
    const nft = faker.helpers.arrayElement(collectionRandom);

    nftList.push({
      contract: nft.collectionAddress,
      tokenId: (faker.number.int({ max: nft.maxToken })).toString(),
    })
  }

  return nftList;
}

async function main() {
  let purchaseDate = moment("2024-06-01");
  //create users

  for (let i = 0; i < 20; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        password: await bcrypt.hash("password", 10),
        username: faker.internet.userName(),
        createdAt: faker.date.between({
          from: '2020-01-01T00:00:00.000Z',
          to: '2024-06-01T00:00:00.000Z'
        })
      }
    });

    await prisma.userConnectedAccount.create({
      data: {
        userId: user.id,
        type: ConnectedAccountType.WALLET,
        value: faker.string.hexadecimal({
          length: 32
        })
      }
    })
  }

  const users = await prisma.user.findMany();
  // create catalogs

  for (let i = 0; i < 20; i++) {
    const creator = faker.helpers.arrayElement(users);
    const nfts = generateRandomNfts();
    let price = 0;

    for (let j = 0; j < nfts.length; j++) {
      const nft = nfts[j];
      await nftService.show(nft);
      await nftService.purchase(nft);
    }

    const catalog = await catalogService.create(
      faker.internet.userName(),
      faker.color.rgb(),
      creator
    )

    await catalogService.updateNft(catalog, nfts, []);
    const catalogNfts = await _prisma.catalogNfts.findMany({
      where: {
        catalogId: catalog.id,
      },
      include: {
        nft: true
      }
    });

    for (let j = 0; j < catalogNfts.length; j++) {
      const item = catalogNfts[j];
      const currentData = await _prisma.nft.findFirst({
        where: {
          collectionAddress: item.nft?.collectionAddress,
          tokenId: item.nft?.tokenId
        }
      });

      if (currentData) {
        price += currentData.price
      }
    }

    await catalogService.mint(
      catalog,
      i,
      faker.string.hexadecimal({ length: 40 }),
      price,
      purchaseDate
    )
  }

  const catalogs = await prisma.catalog.findMany({
    include: {
      nfts: {
        include: {
          nft: true,
        }
      },
    }
  });

  for (let j = 1; j <= 30; j++) {
    purchaseDate = purchaseDate.add(1, "day");
    const randomCount = faker.number.int({
      min: 5,
      max: 10,
    });

    for (let i = 0; i < randomCount; i++) {
      const buyer = faker.helpers.arrayElement(users);
      const catalog = faker.helpers.arrayElement(catalogs);
      const nfts = catalog.nfts;
      let price = 0;

      for (let j = 0; j < nfts.length; j++) {
        const nft:NftPayload = {
          contract: nfts[j].nft?.collectionAddress ?? "",
          tokenId: nfts[j].nft?.tokenId ?? "",
        };
        await nftService.purchase(nft);
      }

      const catalogNfts = await _prisma.catalogNfts.findMany({
        where: {
          catalogId: catalog.id,
        },
        include: {
          nft: true
        }
      });

      for (let j = 0; j < catalogNfts.length; j++) {
        const item = catalogNfts[j];
        const currentData = await _prisma.nft.findFirst({
          where: {
            collectionAddress: item.nft?.collectionAddress,
            tokenId: item.nft?.tokenId
          }
        });

        if (currentData) {
          price += currentData.price
        }
      }

      await catalogService.purchase(
        catalog,
        buyer,
        price,
        faker.string.hexadecimal({ length: 40 }),
        purchaseDate
      )
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
