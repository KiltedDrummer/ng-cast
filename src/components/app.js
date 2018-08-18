angular.module('video-player')

  .component('app', {
    bindings: {},
    controller: function(youTube) {
      this.selectVideo = (e) => {
        this.currentVideo = e;
      };
      
      this.searchResults = (arr) => {
        this.videos = arr;
        this.currentVideo = arr[0];
      };

      this.service = youTube;
      
      this.$onInit = function() {
        this.service.search('', this.searchResults);
      };
    },
    templateUrl: 'src/templates/app.html'
  });
