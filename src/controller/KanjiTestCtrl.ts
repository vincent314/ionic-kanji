///<reference path="../mm/mm.d.ts" />
module app {
  import Kanji = mm.Kanji;
  export class KanjiTestCtrl {
    kanji:Kanji;
    answer:string;
    goodAnswers:Array<string> = [];

    constructor(KanjiService:KanjiService) {
      KanjiService.getKanjiList().then((data)=>{
          this.kanji = data[0];
      });
    }

    public onSubmit(){
      var romaji:string = wanakana.toRomaji(this.answer);
      this.goodAnswers.push(romaji);
      console.log(romaji);
    }
  }
}
