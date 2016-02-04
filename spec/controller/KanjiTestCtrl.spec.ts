///<reference path="../../src/typings.d.ts" />
///<reference path="../../typings/jasmine/jasmine.d.ts"/>
import KanjiTestCtrl = app.KanjiTestCtrl;
import IKanjiTestCtrl = app.IKanjiTestCtrl;
import IKanjiService = app.IKanjiService;
import IQService = angular.IQService;
import SpyAnd = jasmine.SpyAnd;
import Spy = jasmine.Spy;
import Kanji = mm.Kanji;
describe('KanjiTestCtrl - ',function(){
  var ctrl:KanjiTestCtrl;
  beforeEach(()=>{
    var service:IKanjiService = jasmine.createSpyObj('IKanjiService',['getKanjiList']);

    inject(['$q',function($q:IQService){
      (<Spy>service.getKanjiList).and.returnValue($q.when([]));
    }]);

    ctrl = new KanjiTestCtrl(service);
  });

  it('Test 1',function(){
    expect(true).toBe(true);
  });

  it('FindByRomaji',function(){
    var readings:Array<string> = ['こころ','ひと'];
    var found = ctrl.findByRomaji(readings,'hito');
    expect(found).toBe('ひと');
  });

  it('FindByRomaji with brackets',function(){
    var readings:Array<string> = ['こころ','はい（る）','ひと'];
    var found = ctrl.findByRomaji(readings,'hai');
    expect(found).toBe('はい（る）');
  });
});
