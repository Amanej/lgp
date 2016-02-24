// Model collection
Models = new Mongo.Collection('models');
// Model schema

// Model pictures
Modelpictures = new FS.Collection('modelpictures', {
  stores: [new FS.Store.GridFS('modelpictures')]
});

// Model images
  // Used to connect it with the modelpictures
  // Stores the id of image along with the id of the model
Modelimages = new Mongo.Collection('modelimages');

// Model files
Modelfiles = new FS.Collection('modelfiles', {
  stores: [new FS.Store.GridFS('modelfiles')]
});
