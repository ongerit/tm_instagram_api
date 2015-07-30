$(document).ready(function() {

  var feed = new Instafeed({
    get: 'tagged',
    tagName: '2MM2015',
    clientId: '28bb3b6c18f44b308b862bead17a05e2',
    limit: 4,
    links: false,
    template: '<div class="instaPhoto"> <img class="main-image overlay" src="{{image}}" /></div>',
    resolution: 'standard_resolution',
  });

  feed.run();


});
