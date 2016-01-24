module app{
  import IStateParamsService = angular.ui.IStateParamsService;
  import Kanji = mm.Kanji;

  interface StateParams extends IStateParamsService{
    kanji:Kanji;
  }

  export class KanjiDetailsCtrl{
    kanji:Kanji;

    constructor($stateParams:StateParams){
      this.kanji = $stateParams.kanji;
    }
  }
}
