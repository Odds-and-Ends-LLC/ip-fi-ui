import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";
import { prepareResponse } from "@/utils/common";

function routeHandler() {
    return nc<NextApiRequest, NextApiResponse>({
        onError: (err, req, res: any, next: any) => {
            console.error(err);
            prepareResponse(res, {}, 500, {
                error: "unexpected error occurred.",
            });
        },
        onNoMatch: (req: any, res: any) => {
            prepareResponse(res, {}, 405, {
                error: "method not allowed.",
            });
        },
    })
        .use(cors())
        .options(cors());
}

export default routeHandler;
