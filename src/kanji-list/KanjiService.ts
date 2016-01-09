/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />

module app {
  import IPromise = angular.IPromise;
  import Kanji = mm.Kanji;
  export class KanjiService {
    $http:angular.IHttpService;
    config:any;

    constructor($http, config) {
      this.$http = $http;
      this.config = config;
    }

    public getKanjiList():IPromise<Kanji[]> {
      return this.$http.get('../resources/' + this.config.kanji.dataFile)
        .then((res)=> {
          return res.data;
        });
    }
  }
}
