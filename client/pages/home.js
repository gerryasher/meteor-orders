Template.home.helpers({
    'orders': function(){
        return Orders.find({}, {sort: {LocName: 1}});
    }
});