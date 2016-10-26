(function () {
  
  'use strict';
  
  /*
   * @author: Alan Museljic
   * @licence: MIT
   * @about: based on old hippo cms 'site' example
   * @github: https://github.com/uloga
   */
  
  var apiPrefix = 'https://www.demo.onehippo.com/restapi/';
  
  angular
    .module('HippoProducts', [
      'ngResource',
      'ngSanitize',
      'ngRoute',
    ])
    .constant('apiPrefix', apiPrefix)
    .config(ProductsConfig)
    .filter('apiPath', ApiFilter); 

  
  /**
   * Products Config
   */
  
  ProductsConfig.$inject = ['$routeProvider', '$resourceProvider'];
  
  function ProductsConfig($routeProvider, $resourceProvider) {
    
    $resourceProvider.defaults.stripTrailingSlashes = false;
    
    $routeProvider
      .when('/', {
        templateUrl: 'app/view/list.html',
        controller: 'ProductsController',
        controllerAs: 'Products'
      })
      .when('/:path*', {
        templateUrl: 'app/view/detail.html',
        controller: 'ProductsController',
        controllerAs: 'Products'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  
  
  /**
   * Api Path Filter
   */
  
  ApiFilter.$inject = ['apiPrefix'];
  
  function ApiFilter(apiPrefix) {
    return function(input){
      return input.substr(apiPrefix.length);
    }
  }
  
})();

