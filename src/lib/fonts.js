import { Roboto, Manrope, Inter } from "@next/font/google";

export const inter = Inter({
  weight: ["700", "400", "600"],
  subsets: ["cyrillic"]
});
export const manrope = Manrope({ weight: "800", subsets: ["cyrillic"] });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });
