import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { AuthenticatedNextRequest } from "@/types";
import { _prisma } from "@/lib/prisma";
import jsonwebtoken from "jsonwebtoken";

async function jwtAuthTokenMustExists(req: AuthenticatedNextRequest, res: NextApiResponse, next: any) {
  const headers = new Headers(req.headers);
  const token = headers.get("x-access-token");
  
  if (!token) {
    return res.status(403);
  }
  try {
    const decoded:any = jsonwebtoken.verify(token, process.env.JWT_TOKEN_KEY || "");

    const user = await _prisma.user.findFirst({
      where: {
        id: decoded.id,
      },
    });

    if (user) {
      req.user = user;
      return next();
    } else {
      return res.status(401).send("Invalid Token");
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
}

export default jwtAuthTokenMustExists;
