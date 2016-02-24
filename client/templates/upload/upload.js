// Handle model upload
Template.upload.events({
  'submit .new-model': function(event) {
    var title = event.target.title.value;
    var description = event.target.description.value;
    var category = event.target.category.value;

    var images = event.target.images;
    console.log(event);

    console.log(title);
    console.log(description);
    console.log(category);

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
