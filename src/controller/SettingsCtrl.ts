module app{
  import ITranslateService = angular.translate.ITranslateService;
  export class SettingsCtrl{
    KanjiService:KanjiService;
    $translate:ITranslateService;
    ionicToast:IIonicToast;

    constructor(KanjiService:KanjiService,$translate:ITranslateService,ionicToast:IIonicToast){
      this.KanjiService = KanjiService;
      this.$translate = $translate;
      this.ionicToast = ionicToast;
    }

    public invalidCache():void{
      this.KanjiService.invalidCache();
      this.$translate('CACHE_INVALIDATED').then((message)=>{
        this.ionicToast.show(message, 'middle', false, 2500);
      });

    }
  }
}
