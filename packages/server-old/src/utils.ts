export function angleToDegree(angle) {
  const result = Math.floor(((angle % 360) * 256) / 360);
  if (result < -128) return result + 256;
  if (result > 127) return result - 256;
  return result;
}

export type ChunkKey = `${number},${number}`;
