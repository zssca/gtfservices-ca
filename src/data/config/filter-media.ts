export const filterMedia = [
  "Polyester",
  "Cellulose", 
  "Wood pulp paper",
  "Carbon fiber",
  "PTFE (Polytetrafluoroethylene)",
  "Anti-static materials",
  "Oil-water repellent materials", 
  "ePTFE (expanded polytetrafluoruethylene)",
  "Spunbond polyester",
  "Fiberglass",
  "Aramid",
  "PPS (Polyphenylene Sulfide)",
  "Conductive materials",
  "Nano fiber coating",
  "Microporous PTFE",
  "Long fiber polyester",
  "Conductive polyester blend",
  "Yellow polyester",
  "Blue polyester",
  "White polyester",
  "Synthetic fiber blends",
  "High-efficiency synthetic fiber"
] as const;

export type FilterMedia = typeof filterMedia[number];
