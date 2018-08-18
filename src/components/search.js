angular.module('video-player')

  .component('search', {
    
    bindings: {
      result: '<',
      service: '<'
    },
    templateUrl: 'src/templates/search.html'
    // TODO
  });
// .controller('youTubeSearch', function($scope, youTube) {
//   console.log($scope);
//   $scope.search = youTube.search;
// });
