/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />

module app {
  import IPromise = angular.IPromise;
  import Kanji = mm.Kanji;
  import IHttpService = angular.IHttpService;

  export class KanjiService {
    $http:IHttpService;
    config:config.Config;

    constructor($http:IHttpService, config:config.Config) {
      this.$http = $http;
      this.config = config;
    }

    public getKanjiList():IPromise<Kanji[]> {
      return this.$http.get('resources/' + this.config.kanji.dataFile)
        .then((res)=> {
          return res.data;
        });
    }
  }
}
