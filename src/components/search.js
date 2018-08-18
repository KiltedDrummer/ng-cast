angular.module('video-player')

  .component('search', {
    
    bindings: {
      result: '<',
      service: '<'
    },
    controller: function($scope, youTube) {
      // this.result = youTube.result;
      // this.search = this.service.search;
      // this.onSearch = function() {
        
      // };
    },
    templateUrl: 'src/templates/search.html'
    // TODO
  });
// .controller('youTubeSearch', function($scope, youTube) {
//   console.log($scope);
//   $scope.search = youTube.search;
// });
