(function () {
  
  'use strict';
  
  /**
   * Hippo Products Controller
   */
  
  angular
    .module('HippoProducts')
    .controller('ProductsController', ProductsController);
  
  /**
   * Products Controller
   */
  
  ProductsController.$inject = ['ProductsService', '$routeParams'];
  
  function ProductsController(ProductsService, $routeParams) {
    
    
    var vm = this;
    vm.products = Products;
    vm.product = Product;
    
    /**
     * Products : Get all products
     */
    
    function Products(perPage) {
      return ProductsService.getProducts(perPage);
    }
    
    /**
     * Product: Get a product based on pathname
     */
    
    function Product() {
      return ProductsService.getProductByPath($routeParams.path);
    }
   
  }
  
})();