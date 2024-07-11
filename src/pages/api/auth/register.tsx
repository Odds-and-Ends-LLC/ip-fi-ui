import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { Override, RequestBody } from "@/types";
import { StatusCodes } from "http-status-codes";
import { prepareResponse } from "@/utils/common";
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
        username: string;
        about: string;
        walletAddresses: string[];
      }>
    >,
    res
  ) => {
    const saltRounds = 10;
    let status = StatusCodes.OK;
    let errorData = {};
    let jwtToken = "";

    const { email, password, username, about, walletAddresses } = req.body;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    let user = await _prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      user = await _prisma.user.create({
        data: {
          email,
          password: passwordHash,
          username,
          description: about,
        },
      });

      for (let i = 0; i < walletAddresses.length; i++) {
        await _prisma.userConnectedAccount.create({
          data: {
            userId: user.id,
            type: ConnectedAccountType.WALLET,
            value: walletAddresses[i],
          },
        });
      }

      jwtToken = jwt.sign({ id: user.id }, process.env.JWT_TOKEN_KEY || "");
    } else {
      status = StatusCodes.NOT_ACCEPTABLE;
      errorData = {
        message: "email address already existing",
      };
    }

    return prepareResponse(
      res,
      {
        user: {
          id: user.id,
          email,
          username,
          pfp: user.profile_picture,
        },
        token: jwtToken,
      },
      status,
      errorData
    );
  }
);

export default handler;
