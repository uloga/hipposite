(function () {
  
  'use strict';
  
  /** 
   * Hippo Products Service
   */
  
  angular
    .module('HippoProducts')
    .service('ProductsService', ProductsService);
  
  /**
   * Products Service
   */
  
  ProductsService.$inject = ['$resource', 'apiPrefix'];
  
  function ProductsService($resource, apiPrefix) {
    
    var vm = this;
    vm.getProducts = GetProducts;
    vm.getProductByPath = getProductByPath;
    
    /**
     * Get ist of products
     */
    
    function GetProducts(perPage) {
      
      var path  = perPage != 'undefined' 
                ? apiPrefix + 'topproducts/?display=' + perPage
                : apiPrefix + 'topproducts';
                
      return $resource(path, {'_type': 'json'}).query();
      
    }
    
    /**
     * Get a product by path
     */
    
    function getProductByPath(path) {
      var path = apiPrefix + path;
      return $resource(path, {'_type': 'json'}).get();
    }
    
  }
  
})();
