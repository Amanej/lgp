//helpers
Template.test2.helpers({
'models': function() {
  return Models.find().fetch();
},
'modelimages': function(id) {
  var image = Modelimages.find({modelid: id});
  console.log(image.modelid);
  return image.modelid;
},
'modelpictures': function(id) {
  var picture = Modelpictures.find({pictureid: id});
  console.log(picture);
  return picture;
}
});
