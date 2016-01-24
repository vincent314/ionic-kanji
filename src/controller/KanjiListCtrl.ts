///<reference path="../service/KanjiService.ts"/>
///<reference path="../mm/mm.d.ts" />

module app {

  import Kanji = mm.Kanji;
  export class KanjiListCtrl {
    public kanjis:Kanji[];

    constructor(KanjiService:KanjiService) {
      this.kanjis = [];
      KanjiService.getKanjiList().then((kanjis:Kanji[])=> {
        this.kanjis = kanjis;
      });
    }
  }
}
