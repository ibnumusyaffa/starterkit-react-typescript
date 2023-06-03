function getHashOfString(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)
  return hash
}

function normalizeHash(hash: number, min: number, max: number) {
  return Math.floor((hash % (max - min)) + min)
}

function getRange(value: number, range: number) {
  return [Math.max(0, value - range), Math.min(value + range, 100)]
}

export function generateColor(name?: string) {
  if (!name) {
    return undefined
  }
  const range = 11
  const saturation = 55
  const lightness = 50
  const saturationRange = getRange(saturation, range)
  const lightnessRange = getRange(lightness, range)

  const hash = getHashOfString(name)
  const h = normalizeHash(hash, 0, 360)
  const s = normalizeHash(hash, saturationRange[0], saturationRange[1])
  const l = normalizeHash(hash, lightnessRange[0], lightnessRange[1])
  return `hsl(${h}, ${s}%, ${l}%)`
}
