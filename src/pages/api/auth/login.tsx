import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { Override, RequestBody } from "@/types";
import { prepareResponse } from "@/utils/common";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ConnectedAccountType } from "@prisma/client";

const handler = routeHandler().post(
  async (
    req: Override<
      NextRequest,
      RequestBody<{
        email: string;
        password: string;
      }>
    >,
    res
  ) => {
    const { email, password } = req.body;
    let status = StatusCodes.OK;
    let errorData = {};
    let jwtToken = "";
    let loginValid = false;
    const walletAddresses: string[] = [];

    const user = await _prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        connectedAccounts: true,
      },
    });

    if (user) {
      loginValid = await bcrypt.compare(password, user.password);
    }

    if (!loginValid || !user) {
      errorData = {
        message: "invalid credentials",
      };
    } else {
      user.connectedAccounts
        .filter((item) => item.type === ConnectedAccountType.WALLET)
        .map((item) => walletAddresses.push(item.value));

      jwtToken = jwt.sign({ id: user.id }, process.env.JWT_TOKEN_KEY || "");
    }

    return prepareResponse(
      res,
      loginValid
        ? {
            user: {
              id: user?.id,
              email: user?.email,
              username: user?.username,
              pfp: user?.profile_picture,
              walletAddresses,
            },
            token: jwtToken,
          }
        : {},
      status,
      errorData
    );
  }
);

export default handler;
