// components
import { Catalog } from "@/components";

export default function Binder({
  catalogName,
  coverBackgroundColor,
  coverImage,
  nfts = [1, 2, 3, 4, 5 , 6],
}) {

  return (
    <Catalog
      catalogName={catalogName}
      coverBackgroundColor={coverBackgroundColor}
      coverImage={coverImage}
      nfts={nfts}
    />
  )
}
