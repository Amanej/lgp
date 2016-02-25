//helpers
Template.test.helpers({
  'modelpictures': function() {
    return Modelpictures.find();
  },
  'models': function() {
    return Models.find();
  },
  'modelimgs': function(id) {
    var pic = Modelimages.find({modelid: id});
    var count = 0;
    pic.forEach(function (image) {
      var id = image.picid;
      var images = Modelpictures.find({_id: id}).fetch();
      console.log(images.url);
      return images.url;
      count += 1;
    });
  }
});
