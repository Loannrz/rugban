export const IDF_MAP_VIEWBOX = "0 0 560 460";

/** Contour simplifié de l'Île-de-France (projection lon/lat → SVG). */
export const idfRegionOutline =
  "M 41.4 218.4 L 47.5 183.7 L 61.2 155.6 L 84.7 135.3 L 114.0 112.2 L 147.0 94.8 L 181.8 78.9 L 218.8 63.0 L 258.4 50.0 L 300.6 42.8 L 345.5 41.3 L 390.3 50.0 L 432.5 66.6 L 466.9 91.9 L 493.2 124.5 L 511.7 164.2 L 522.3 207.6 L 524.9 251.0 L 519.6 294.3 L 506.4 334.1 L 485.3 366.6 L 458.9 391.9 L 429.9 410.0 L 398.2 420.8 L 366.6 424.4 L 334.9 420.8 L 303.2 413.6 L 271.6 402.8 L 239.9 388.3 L 208.2 370.2 L 179.2 348.5 L 152.8 323.2 L 129.0 294.3 L 107.9 261.8 L 89.5 240.1 L 71.0 225.7 L 52.5 222.0 L 41.4 218.4 Z";

/** Petite couronne - anneau autour de Paris. */
export const idfPetiteCouronne =
  "M 280 228 m -62 0 a 62 62 0 1 0 124 0 a 62 62 0 1 0 -124 0";

/** Tracé stylisé de la Seine. */
export const idfSeineRiver =
  "M 72 198 C 130 188, 205 210, 280 228 C 355 248, 410 285, 478 318";

/** Séparations indicatives entre départements (depuis Paris). */
export const idfDepartmentGuides = [
  "M 280 228 L 280 78",
  "M 280 228 L 372 112",
  "M 280 228 L 472 228",
  "M 280 228 L 372 344",
  "M 280 228 L 280 392",
  "M 280 228 L 188 268",
  "M 280 228 L 118 328",
  "M 280 228 L 188 112",
] as const;

/** Contour France (locator). */
export const franceLocatorOutline =
  "M 8.7 41.8 L 30.3 33.1 L 73.7 0.0 L 117.0 26.3 L 112.7 111.3 L 73.7 134.5 L 39.0 119.1 L 8.7 41.8 Z";

export const FRANCE_LOCATOR_VIEWBOX = "0 0 130 150";
