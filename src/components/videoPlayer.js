angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      if (!this.video) {
        this.getIframeSrc = function (videoId) {
          return 'https://www.youtube.com/embed/' + videoId;
        };
      }
      
      // this.fullUrl = "https://www.youtube.com/embed/" + this.videoId;
    },
    templateUrl: 'src/templates/videoPlayer.html'
    // TODO
  });
