/// <reference path="../../typings/tsd.d.ts" />
///<reference path="../mm/mm.d.ts" />
var KanjiService = (function () {
    function KanjiService($http, config) {
        this.$http = $http;
        this.config = config;
    }
    KanjiService.prototype.getKanjiList = function () {
        return this.$http.get('../resources/' + this.config.kanji.dataFile)
            .then(function (res) {
            return res.data;
        });
    };
    return KanjiService;
})();
//# sourceMappingURL=KanjiService.js.map