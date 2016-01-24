/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./config.d.ts" />

module config {
  export function getConfig():Config {
    return {
      kanji: {
        dataUrl: 'http://japonais.ovh/docs/kanji-lessons/data/kanjis.json'
      }
    }
  }
}

