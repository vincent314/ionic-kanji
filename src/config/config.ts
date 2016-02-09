/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./config.d.ts" />

module config {
  export function getConfig():Config {
    return {
      kanji: {
        dataUrl: 'https://vincent314.github.io/nihongo3.14/docs/kanji-lessons/data/kanjis.json'
      }
    }
  }
}

