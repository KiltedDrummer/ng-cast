angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      console.log(this);
      this.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
      // this.fullUrl = "https://www.youtube.com/embed/" + this.videoId;
    },
    templateUrl: 'src/templates/videoPlayer.html'
    // TODO
  });
