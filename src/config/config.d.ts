declare module config {
  interface Kanji {
    dataFile:string;
  }

  interface Config {
    kanji:Kanji
  }
}
