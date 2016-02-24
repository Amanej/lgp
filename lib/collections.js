// Model collection
Models = new Mongo.Collection('models');
// Model schema

// Model pictures
Modelpictures = new FS.Collection('modelpictures', {
  stores: [new FS.Store.GridFS('modelpictures')]
});

// Model files
Modelfiles = new FS.Collection('modelfiles', {
  stores: [new FS.Store.GridFS('modelfiles')]
});
