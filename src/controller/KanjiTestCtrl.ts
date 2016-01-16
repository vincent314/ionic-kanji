///<reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />
module app {
  import Kanji = mm.Kanji;
  export class KanjiTestCtrl {
    kanjis:Array<Kanji>;
    kanji:Kanji;
    answer:string;
    goodAnswers:Array<string>;
    solutions:Array<string>;
    message:string;
    total:number;
    score:number;

    constructor(KanjiService:KanjiService) {
      KanjiService.getKanjiList().then((data:Kanji[])=> {
        this.kanjis = data;
        this.init();
      });
    }

    public init() {
      this.kanji = _.sample(this.kanjis);
      this.total = this.kanji.readings.length;
      this.goodAnswers = [];
      this.score = 0;
      this.solutions = [];
      this.message = null;
    }

    public onSubmit() {
      // find answer from list of Kanji readings
      var reading:string = this.findByRomaji(this.kanji.readings, this.answer);

      if (reading) {
        this.goodAnswers.push(reading);
        this.message = null;
      } else {
        this.message = this.answer + " - réponse incorrect";
      }

      // reset text input
      this.answer = "";

      this.score = this.goodAnswers.length;
      this.total = this.kanji.readings.length
    }

    private findByRomaji(readings:Array<string>, value:string):string{
      return _.find(readings,
        (item:string)=>{
          return wanakana.toRomaji(item) === wanakana.toRomaji(value.replace(/\(.+\)/, ''))
        });
    }

    public onNext(){
      this.init();
    }

    public onAbord(){
      console.log(this.solutions);
      this.solutions = _.filter(this.kanji.readings,(item)=>{
        return !this.findByRomaji(this.goodAnswers,item);
      });
    }
  }
}
