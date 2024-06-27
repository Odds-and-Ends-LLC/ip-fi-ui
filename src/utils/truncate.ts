export const truncate = (hash: string, preSize: number, postSize: number) => {
  if (!hash) {
    return "";
  }

  const pre = hash.slice(0, preSize);
  const post = hash.slice(hash.length - postSize, hash.length);

  return `${pre}...${post}`;
};