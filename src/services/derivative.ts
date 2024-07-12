import { Nft, User } from "@prisma/client"

const create = async (details: {
  name: string,
  slug: string,
  coverColor: string,

}, creator: User) => {

}

const purchase = async () => {

}

export const derivate = {
  create,
  purchase
}
