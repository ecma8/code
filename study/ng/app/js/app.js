var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list',{
    	templateUrl:'tpls/bookList.html',
    	controller:'BookListCtrl'
    }).when('/detail/:id', {
          templateUrl: 'tpls/detail.html',
          controller: 'DetailCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
