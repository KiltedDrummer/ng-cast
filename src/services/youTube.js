angular.module('video-player')
  .service('youTube', function($http) {
    
    // TODO
    
    this.search = function(str, func) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: str,
          key: YOUTUBE_API_KEY,
          maxResult: 5,
          type: 'video',
          videoEmbeddable: true,
        }
      }).then(function success(data) {
        func(data.data.items);
      }, function failure() { console.log('oh no'); });
      
    };
  });
