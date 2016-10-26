(function () {
  
  'use strict';
  
  angular
    .module('HippoProducts')
    .directive('productsGrid', ProductsGrid)
    .directive('productsButton', ProductsButton)
    .directive('displayProduct', DisplayProduct);
  
  /**
   * Hippo Products Directive
   */
  
  function ProductsGrid() {
    
    var directive = {
      restricted: 'E',
      scope: {
        products: '@',
        grid: '@',
        perPage: '@'
      },
      transclude: true,
      replace: true,
      controller: 'ProductsController',
      link: ProductsGridLink,
      templateUrl: ProductsTemplate,
      
    };
    
    return directive;
    
    /**
     * Products Link
     */
    
    function ProductsGridLink(scope, el, attr, ctrl) {
      
      /*
       * @per-page 
       * you can pass how many items you want
       * your grid to display per page;
       * <products-grid per-page="*count"></products-grid>a
       */

      var perPage = attr.perPage || 10;
      ctrl.products(perPage)
        .$promise
        .then(function(data){
          scope.products = data;
      });
    }
    
    /**
     * Products Template
     */
    
    function ProductsTemplate(el, attr){
      return attr.templateUrl || 'app/view/partials/grid.html';
    }
    
  }
  
  /**
   * Products Button Directive
   */
  
  function ProductsButton() {
    
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope:{
        productName: '@'
      },
      template: '<a ng-href="#/{{productName}}" class="btn info" ng-transclude></a>',
      controller: 'ProductsController'
    }
    
    return directive;
    
  }
  
  
  /**
   * Display a product directive
   */
  
  function DisplayProduct() {
    
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: DisplayProductTemplate,
      link: DisplayProductLink,
      controller: 'ProductsController'
    }
    
    return directive;
    
    /**
     * Display Product Link
     */
    function DisplayProductTemplate(el, attr) {
      return attr.templateUrl || 'app/view/partials/product.html';
    }
    
    /**
     * Display Product Link
     */
    
    function DisplayProductLink(scope, el, attr, ctrl) {
      ctrl.product()
        .$promise
        .then(function(data){
          scope.product = data;
      });
    }
    
  }
  
})();