///<reference path="../../src/typings.d.ts" />
///<reference path="../../typings/jasmine/jasmine.d.ts"/>

import KanjiService = app.KanjiService;
import IHttpService = angular.IHttpService;
import ILocalStorageService = angular.local.storage.ILocalStorageService;
import IonicLoadingService = ionic.loading.IonicLoadingService;
fdescribe('Test de KanjiService -', ()=> {
  var service:KanjiService;

  beforeEach(angular.mock.module('ionic'));
  beforeEach(angular.mock.module('LocalStorageModule'));
  beforeEach(()=> {
    inject(($http:IHttpService,localStorageService:ILocalStorageService,$q:IQService,$ionicLoading:IonicLoadingService)=> {
      service = new KanjiService($http, config.getConfig(),localStorageService,$q,$ionicLoading);
    })
  });

  it('Fonction diff kanji-kana mix', ()=> {
    expect(service.diff('しょうしょくはながいきのしるし', '小食は長生きのしるし')).toBe('');
  });

  it('Fonction diff kana', ()=> {
    expect(service.diff('ことり', '小鳥')).toBe('');
  });
});
