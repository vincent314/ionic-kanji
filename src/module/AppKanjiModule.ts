/// <reference path="../../typings/tsd.d.ts" />
///<reference path="./../config/config.ts" />
///<reference path="types.d.ts" />
///<reference path="../controller/KanjiListCtrl.ts" />
///<reference path="../controller/KanjiTestCtrl.ts" />
///<reference path="../controller/SettingsCtrl.ts" />
///<reference path="../service/KanjiService.ts" />

var StatusBar:StatusBar;

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

module app {
  import IonicPlatformService = ionic.platform.IonicPlatformService;
  import ITranslateProvider = angular.translate.ITranslateProvider;
  import IStateProvider = angular.ui.IStateProvider;
  import IUrlRouterProvider = angular.ui.IUrlRouterProvider;

  angular.module('app-kanji', ['ionic', 'ngAnimate', 'LocalStorageModule','pascalprecht.translate','ionic-toast'])
    .constant('config', config.getConfig())
    .run(activate)
    .config(configure)
    .controller('KanjiListCtrl', KanjiListCtrl)
    .controller('KanjiTestCtrl', KanjiTestCtrl)
    .service('KanjiService', KanjiService)
    .constant('$ionicLoadingConfig',{
      template:'Loading … <ion-spinner></ion-spinner>'
    });

  function activate($ionicPlatform:IonicPlatformService) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideFormAccessoryBar(true);
        cordova.plugins.Keyboard.disableScrollingInShrinkView(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }

  function configure($stateProvider:IStateProvider, $urlRouterProvider:IUrlRouterProvider, $translateProvider:ITranslateProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.kanji-list', {
        url: '/kanji-list',
        views: {
          'tab-kanji-list': {
            templateUrl: 'templates/tab-kanji-list.html',
            controller: KanjiListCtrl,
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.details', {
        url: '/details',
        params: {kanji: null},
        views: {
          'tab-kanji-list': {
            templateUrl: 'templates/kanji-details.html',
            controller: KanjiDetailsCtrl,
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.kanji-test', {
        url: '/kanji-test',
        views: {
          'tab-kanji-test': {
            templateUrl: 'templates/tab-kanji-test.html',
            controller: KanjiTestCtrl,
            controllerAs: 'vm'
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'templates/tab-settings.html',
            controller: SettingsCtrl,
            controllerAs: 'vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/kanji-list');

    // Configure label translations
    $translateProvider.useSanitizeValueStrategy('escape');
    config.getTranslate($translateProvider);
  }
}
