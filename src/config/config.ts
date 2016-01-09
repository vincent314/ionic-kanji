/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./config.d.ts" />

module config {
  export function getConfig():Config {
    return {
      kanji: {
        dataFile: 'kanjis.json'
      }
    }
  }
}

