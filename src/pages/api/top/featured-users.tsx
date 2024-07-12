import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { UserType } from "@/types";
import { prepareResponse } from "@/utils/common";
import { ConnectedAccountType } from "@prisma/client";
import moment from "moment";
import { NextRequest } from "next/server";

const handler = routeHandler().get(async (req: NextRequest, res) => {
  const users = await _prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: { ownedCatalog: true },
      },
      connectedAccounts: true,
    },
  });

  const userList: UserType[] = [];

  users.forEach((user) => {
    const currentUser: UserType = {
      id: user.id.toString(),
      email: "",
      username: user.username ?? "",
      pfp: user.profile_picture ?? "/images/image_1.png",
      walletAddresses: user.connectedAccounts
        .filter((item) => item.type === ConnectedAccountType.WALLET)
        .map((item) => item.value),
      joinedAt: moment(user.createdAt).toDate(),
      lastActiveAt: moment().toDate(),
      responseTime: 0,
      responseRate: "100%",
      collectionCount: 0,
      catalogCount: user._count.ownedCatalog,
    }

    userList.push(currentUser);
  })

  return prepareResponse(res, userList);
});

export default handler;
