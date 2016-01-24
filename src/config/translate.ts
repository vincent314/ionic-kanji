module config{
  import ITranslateProvider = angular.translate.ITranslateProvider;
  import ITranslationTable = angular.translate.ITranslationTable;
  export function getTranslate($translateProvider:ITranslateProvider){
    $translateProvider.translations('fr',{
      'KANJI_LIST':'Liste des kanjis',
      'KANJI_DETAILS':'Details',
      'TEST':'Test',
      'ELEMENTS_FOUND':'élements trouvés',
      'GOOD_ANSWERS':'Bonnes réponses',
      'SOLUTIONS':'Solutions',
      'SKIP':'Abandonner',
      'ANSWER':'Réponse'
    });
    $translateProvider.translations('en',{
      'KANJI_LIST':'Kanji lists',
      'KANJI_DETAILS':'Details',
      'TEST':'Test',
      'ELEMENTS_FOUND':'elements found',
      'GOOD_ANSWERS':'Good answers',
      'SOLUTIONS':'Solutions',
      'SKIP':'Skip',
      'ANSWER':'Answer'
    });
    $translateProvider.preferredLanguage('fr');
  }
}
