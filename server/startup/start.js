Meteor.startup(function () {
    if (Pdb.find().count() === 0) {
        Pdb.insert(samplePdb);
    }
    Pdb.allow({
        'insert' : function (userId, doc) {
            return true;
        },
        'update' : function (userId, abc, doc, modifiers) {
            return true;
        },
        'remove' : function (userId, doc) {
            return true;
        },
    });
});