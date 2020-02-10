import { defaultValues } from "../../constants";

export function PixelToRem(pixelSize) {
  return `${pixelSize / defaultValues.fontDefaultSize}rem`;
}
