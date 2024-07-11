import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { Override, RequestBody } from "@/types";
import { prepareResponse } from "@/utils/common";
import { StatusCodes } from "http-status-codes";
import { NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ConnectedAccountType, User } from "@prisma/client";
import { ethers } from "ethers";
import { hashMessage } from "@ethersproject/hash";

const handler = routeHandler().post(
  async (
    req: Override<
      NextRequest,
      RequestBody<{
        wallet: string;
        message: string;
        signature: string;
      }>
    >,
    res
  ) => {
    const { message, signature, wallet } = req.body;

    let status = StatusCodes.OK;
    let errorData = {};
    let verifiedSigner = "";
    let successFlag = true;
    let jwtToken = "";
    let user: User | null = null;
    const walletAddresses: string[] = [];

    try {
      verifiedSigner = ethers.utils.recoverAddress(
        hashMessage(message),
        signature
      );
    } catch (err) {
      successFlag = false;
    }

    if (verifiedSigner.toLowerCase() !== wallet.toLowerCase()) {
      successFlag = false;
    }

    if (successFlag) {
      const connectedAccount = await _prisma.userConnectedAccount.findFirst({
        where: {
          value: wallet.toLowerCase(),
          type: ConnectedAccountType.WALLET,
        },
        include: {
          user: true,
        },
      });

      user = connectedAccount?.user ?? null;

      if (!user) {
        errorData = {
          message: "invalid credentials",
        };
      } else {
        const walletAccounts = await _prisma.userConnectedAccount.findMany({
          where: {
            value: wallet.toLowerCase(),
            userId: user.id,
          },
        });

        walletAccounts.map((item) => walletAddresses.push(item.value));
        jwtToken = jwt.sign({ id: user.id }, process.env.JWT_TOKEN_KEY || "");
      }
    }

    return prepareResponse(
      res,
      successFlag
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
