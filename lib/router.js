Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  // Frontpage
  this.route('home', {
    path: '/',
    template: 'frontpage'
  });
  // Upload model
  this.route('upload', {
    path: '/upload',
    template: 'upload'
  })


  // Test Template
  this.route('test', {
    path: '/test',
    template: 'test'
  });
});
