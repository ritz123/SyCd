Meteor.startup(function () {
    if (Pdb.find().count() === 0) {
        Pdb.insert(samplePdb);
    }
});