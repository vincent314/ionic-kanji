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
      'ANSWER':'Réponse',
      'SETTINGS': 'Paramètres',
      'INVALIDATE_CACHE':'Supprimer les données en cache',
      'CACHE_INVALIDATED':'Le cache a été supprimé'
    });
    $translateProvider.translations('en',{
      'KANJI_LIST':'Kanji lists',
      'KANJI_DETAILS':'Details',
      'TEST':'Test',
      'ELEMENTS_FOUND':'elements found',
      'GOOD_ANSWERS':'Good answers',
      'SOLUTIONS':'Solutions',
      'SKIP':'Skip',
      'ANSWER':'Answer',
      'SETTINGS':'Settings',
      'INVALIDATE_CACHE':'Invalidate cache',
      'CACHE_INVALIDATED':'The cache has been invalidated'
    });
    $translateProvider.preferredLanguage('fr');
  }
}
