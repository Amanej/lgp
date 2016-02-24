// Handle model upload
Template.upload.events({
  'submit .new-model': function(event) {
    var title = event.target.title.value;
    var description = event.target.description.value;
    var category = event.target.category.value;
    var images = event.target.images.files;

    Models.insert({
      title: title,
      description: description,
      category: category
    }, function(err, id) {

      modelid = id;

      for(var i = 0, ln = images.length; i < ln;i++) {

        var picname = images[i].name;


        Modelpictures.insert(images[i], function(err, fileObj) {
          if(err) {
            console.log(err);
            FlashMessages.sendError(err);
            Router.go('upload');
          } else {
            console.log("Upload successful");
            console.log(modelid);
            console.log(fileObj);

            Modelimages.insert({
              modelid: modelid,
              name: picname
            }, function(err, id) {
              console.log(err);
            });

          }
        });
      }
    });

    console.log(images);

    console.log(title);
    console.log(description);
    console.log(category);


    console.log(event);

    return false;
  }
});


// Redirect User
Template.upload.helpers({
  'redirectUser': function(){
    Router.go('/');
    FlashMessages.sendError('You have to be logged in to upload models. Register, it takes 2 seconds and we dont spam.');
  }
});
