/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />

module app {
  import IPromise = angular.IPromise;
  import Kanji = mm.Kanji;
  import IHttpService = angular.IHttpService;
  import ILocalStorageService = angular.local.storage.ILocalStorageService;
  import IQService = angular.IQService;
  import IHttpResponseTransformer = angular.IHttpResponseTransformer;
  import IonicLoadingService = ionic.loading.IonicLoadingService;

  export interface IKanjiService{
    getKanjiList:()=>IPromise<Kanji[]>;
  }

  export class KanjiService {
    $http:IHttpService;
    config:config.Config;
    localStorageService:ILocalStorageService;
    $q:IQService;
    $ionicLoading:IonicLoadingService;

    constructor($http:IHttpService,
                config:config.Config,
                localStorageService:ILocalStorageService,
                $q:IQService,
                $ionicLoading:IonicLoadingService
    ) {
      this.$http = $http;
      this.config = config;
      this.localStorageService = localStorageService;
      this.$q = $q;
      this.$ionicLoading = $ionicLoading;
    }

    public getKanjiList():IPromise<Kanji[]> {
      var kanjis:Kanji[] = this.localStorageService.get<Kanji[]>('kanji-list');

      if (kanjis) {
        console.log("Kanji list found in localstorage (%d)", kanjis.length);
        return this.$q.when<Kanji[]>(kanjis);
      }

      var dataUrl:string = this.config.kanji.dataUrl;

      // Open loading popin
      this.$ionicLoading.show();

      return this.$http.get<Kanji[]>(dataUrl)
        .then((res)=> {
          // Close Loading popin
          this.$ionicLoading.hide();

          var kanjis:Kanji[] = res.data;
          console.log("%d kanjis read from %s", kanjis.length, dataUrl);
          this.localStorageService.set('kanji-list', kanjis);
          return kanjis;
        })
        .catch((err:Error)=>{
          console.log(err);
          this.$ionicLoading.hide();
          return [];
        });
    }

    public invalidCache():void{
      this.localStorageService.remove('kanji-list');
    }
  }
}
