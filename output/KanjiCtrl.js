///<reference path="KanjiService.ts"/>
///<reference path="../mm/mm.d.ts" />
var KanjiCtrl = (function () {
    function KanjiCtrl(KanjiService) {
        var _this = this;
        KanjiService.getKanjiList().then(function (kanjis) {
            _this.kanjis = kanjis;
        });
    }
    return KanjiCtrl;
})();
//# sourceMappingURL=KanjiCtrl.js.map