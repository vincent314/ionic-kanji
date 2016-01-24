/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />

module app {
  import IPromise = angular.IPromise;
  import Kanji = mm.Kanji;
  import IHttpService = angular.IHttpService;
  import ILocalStorageService = angular.local.storage.ILocalStorageService;
  import IQService = angular.IQService;
  import IHttpResponseTransformer = angular.IHttpResponseTransformer;

  export class KanjiService {
    $http:IHttpService;
    config:config.Config;
    localStorageService:ILocalStorageService;
    $q:IQService;

    constructor($http:IHttpService, config:config.Config, localStorageService:ILocalStorageService, $q:IQService) {
      this.$http = $http;
      this.config = config;
      this.localStorageService = localStorageService;
      this.$q = $q;
    }

    public getKanjiList():IPromise<Kanji[]> {
      var kanjis:Kanji[] = this.localStorageService.get<Kanji[]>('kanji-list');

      if (kanjis) {
        console.log("Kanji list found in localstorage (%d)", kanjis.length);
        return this.$q.when<Kanji[]>(kanjis);
      }

      var dataUrl:string = this.config.kanji.dataUrl;

      return this.$http.get<Kanji[]>(dataUrl)
        .then((res)=> {
          var kanjis:Kanji[] = res.data;
          console.log("%d kanjis read from %s", kanjis.length, dataUrl);
          this.localStorageService.set('kanji-list', kanjis);
          return kanjis;
        });


    }
  }
}
