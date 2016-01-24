///<reference path="../../src/typings.d.ts" />
describe('KanjiTestCtrl - ',function(){
  it('Test 1',function(){
    expect(true).toBe(true);
  });

  beforeEach(angular.mock.module('ionic'));
  beforeEach(angular.mock.module('app-kanji'));

  it('FindByRomaji',angular.mock.inject('KanjiTestCtrl',function(KanjiTestCtrl){
    var readings:Array<String> = ['こころ','ひと'];
    var found = KanjiTestCtrl.findByRomaji(readings,'hito');
    expect(found).toBe('');
  }));
});
