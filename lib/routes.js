Router.configure({
    layoutTemplate: 'mainTemplate'
});

Router.route('/', function () {
  this.render('home', {
      data: function () { return Reviews.find({OrderId: '57c88bfbad60dccc40ab60c4'}); }
  });
});

Router.route('/order/:_id', function () {
  this.render('order', {
    data: function () { return Orders.findOne({_id: this.params._id}); }
  });
  this.render('reviewList', {
      to: 'reviewList',
      data: function () { return Reviews.find({OrderId: this.params._id}); }
  });
});

Router.route('/search/:srch', function () {
  this.render('search', {
    data: function () { return Orders.findOne({_id: this.params._id}); }
  });
});
