$(document).ready(function() {

  var feed = new Instafeed({

    //var modalCode = "{target:&#39;#modal-"+photoId+"&#39;}";
    get: 'user',
    userId: 26820542,
    //clientId: '28d08067f8c643188a26d52f1c8af8ed',
    accessToken: '2105340433.467ede5.54c303b775a4408fb89393b131c928eb',
    limit: 10,
    links: false,
    template: '<div class="instaPhoto"> <img class="main-image overlay" src="{{image}}" /></div>',

    resolution: 'standard_resolution',
  });

  feed.run();


});
