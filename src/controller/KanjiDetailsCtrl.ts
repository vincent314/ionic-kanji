module app {
  import IStateParamsService = angular.ui.IStateParamsService;
  import Kanji = mm.Kanji;
  import ISCEService = angular.ISCEService;

  interface StateParams extends IStateParamsService {
    kanji:Kanji;
  }

  export class KanjiDetailsCtrl {
    kanji:Kanji;
    KanjiService:KanjiService;
    $sce:ISCEService;

    constructor($stateParams:StateParams,$sce:ISCEService,KanjiService:KanjiService) {
      this.kanji = $stateParams.kanji;
      this.KanjiService = KanjiService;
      this.$sce = $sce;
    }

    public renderWithFurigana(japanese:string,reading:string):any {
      return this.$sce.trustAsHtml(this.KanjiService.diff(reading, japanese));
    }
  }
}
