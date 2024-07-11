import { _prisma } from "@/lib/prisma";
import routeHandler from "@/lib/routeHandler";
import { Override, QueryString } from "@/types";
import { prepareResponse } from "@/utils/common";
import { NextRequest } from "next/server";

const handler = routeHandler().get(
  async (
    req: Override<
      NextRequest,
      QueryString<{
        email: string;
      }>
    >,
    res
  ) => {
    const { email } = req.query;

    const count = await _prisma.user.count({
      where: {
        email,
      },
    });

    return prepareResponse(res, {
      success: count === 0,
    });
  }
);

export default handler;
