import csv from "csvtojson";
import type { WordsObject } from "./struct";

export const Csv2json = async (csvUrl: string): Promise<WordsObject[]> => {
  const response = await fetch(csvUrl);
  const data = await response.text();
  const object: WordsObject[] = await csv().fromString(data);
  return object;
};
