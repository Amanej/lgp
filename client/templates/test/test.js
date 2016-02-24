//helpers
Template.test.helpers({
  'modelpictures': function() {
    return Modelpictures.find();
  },
  'models': function() {
    return Models.find();
  },
  'modelimgs': function(id) {
    var picId = Modelimages.find({modelId: id}).fetch().name;
    console.log(picId);
  }
});
