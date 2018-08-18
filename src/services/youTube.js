angular.module('video-player')
  .service('youTube', function() {
    
    // TODO
    this.result = function() {
      console.log('Yay it worked!');
    };
    
    this.search = function(func) {
      console.log('seach the youTube');
      func();
    };
  });
