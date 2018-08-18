angular.module('video-player')

  .component('app', {
    bindings: {},
    controller: function() {
      this.selectVideo = function() {
        
      };
      
      this.searchResults = function() {
        
      };
      
      // this.search = function() {
      //   console.log('seach the youTube');
      //   // this.result(); ?
      // };
      
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
      
      var that = this;
      this.onClick = function(e) {
        that.currentVideo = e;
      };
      
    },
    templateUrl: 'src/templates/app.html'
    // TODO
  });
